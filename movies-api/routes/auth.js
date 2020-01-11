const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const ApiKeyService = require('../services/apiKeys');

const { config } = require('../config');

//Basic strategy
require('../utils/auth/strategies/basic');

// Recibe una app que es una aplicacion de express
const authApi = app => {
  const router = express.Router();
  app.use('/api/auth', router); // Ruta de autenticacion

  const apiKeyService = new ApiKeyService(); // Instanciamos los apikeyservices

  //Ruta de sign in
  router.post('/sign-in', async (req, res, next) => {
    const { apiKeyToken } = req.body; // Verificar que en el cuerpo venga un apikeytoken

    // Verificar si el token existe
    if (!apiKeyToken) {
      next(boom.unauthorized('apiKeyToken is required'));
    }

    // Implementar un custom callback
    // Aqui queremos que devuelva un error o un jwt token firmado por el tipo de usuario
    passport.authenticate('basic', (error, user) => {
      try {
        // Validar si el usuario fue encontrado
        if (error || !user) {
          next(boom.unauthorized());
        }

        // login
        req.login(user, { session: false }, async error => {
          // Verificaar si hay un error
          if (error) {
            next(error);
          }

          // Buscar apikey en los servicios de apikey
          const apiKey = await apiKeyService.getApiKey({ token: apiKeyToken });

          // Verificar si existe apikey
          if (!apiKey) {
            next(boom.unauthorized());
          }

          // Construimos JWT con los siguientes datos
          const { _id: id, name, email } = user;

          //Este payload irá en el jwt
          const payload = {
            sub: id,
            name,
            email,
            scopes: apiKey.scopes // estos scopes vienen del apiketoken que esta en nuestro servicio
          };

          // Hacemos un jwt con el payload y el secret con el que se quiere firmar y que expire en 15min
          const token = jwt.sign(payload, config.authJwtSecret, {
            expiresIn: '10m'
          });

          // Si todo sale bien mandamos el json con el token.id y emal
          return res.status(200).json({ token, user: { id, name, email } });
        });
      } catch (error) {
        next(error);
      }
    })(req, res, next); // Debido a que es un custom callback debemos asegurarnos que el autenticate funcione sin problemas
  });
};

module.exports = authApi;
