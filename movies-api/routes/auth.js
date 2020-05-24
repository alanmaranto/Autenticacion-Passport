const express = require('express');
const passport = require('passport');
const boom = require('@hapi/boom');
const jwt = require('jsonwebtoken');
const ApiKeyService = require('../services/apiKeys');
const UsersService = require('../services/users');
const validationHandler = require('../utils/middleware/validationHandler');

const {
  createUserSchema,
  createProviderUserSchema
} = require('../utils/schemas/users');

const { config } = require('../config');

const THIRTY_DAYS_IN_SEC = 2592000;
const TWO_HOURS_IN_SEC = 7200;

//Basic strategy
require('../utils/auth/strategies/basic');

// Recibe una app que es una aplicacion de express con las rutas autenticacion
const authApi = app => {
  const router = express.Router();
  app.use('/api/auth', router); // Ruta de autenticacion

  const apiKeyService = new ApiKeyService(); // Instanciamos los apikeyservices para sign in
  const usersService = new UsersService(); // Instanciamos los usuarios para utilizar el metodo de crear user

  //Ruta de sign in
  router.post('/sign-in', async (req, res, next) => {
    const { apiKeyToken, rememberMe } = req.body; // Verificar que en el cuerpo venga un apikeytoken y un rememberMe que sera una flag

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

          // Si el atributo rememberme es true la expiracion sera de 30 dias de lo contrario sera de 2 horas
          res.cookie('token', token, {
            httpOnly: !config.dev,
            secure: !config.dev,
            maxAge: rememberMe
              ? THIRTY_DAYS_IN_SEC * 1000
              : TWO_HOURS_IN_SEC * 1000
          });

          // Si todo sale bien mandamos el json con el token.id y emal
          return res.status(200).json({ token, user: { id, name, email } });
        });
      } catch (error) {
        next(error);
      }
    })(req, res, next); // Debido a que es un custom callback debemos asegurarnos que el autenticate funcione sin problemas
  });
  // ruta de sign up
  router.post(
    '/sign-up',
    validationHandler(createUserSchema),
    async (req, res, next) => {
      const { body: user } = req;
      try {
        const createUserId = await usersService.createUser({ user });

        res.status(201).json({
          data: createUserId,
          message: 'user created'
        });
      } catch (error) {
        next(error);
      }
    }
  );

  router.post(
    '/sign-provider',
    validationHandler(createProviderUserSchema),
    async function(req, res, next) {
      const { body } = req;

      const { apiKeyToken, ...user } = body;

      if (!apiKeyToken) {
        next(boom.unauthorized('apiKeyToken is required'));
      }

      try {
        const queriedUser = await usersService.getOrCreateUser({ user });
        const apiKey = await apiKeyService.getApiKey({ token: apiKeyToken });

        if (!apiKey) {
          next(boom.unauthorized());
        }

        const { _id: id, name, email } = queriedUser;

        const payload = {
          sub: id,
          name,
          email,
          scopes: apiKey.scopes
        };

        const token = jwt.sign(payload, config.authJwtSecret, {
          expiresIn: '15m'
        });

        return res.status(200).json({ token, user: { id, name, email } });
      } catch (error) {
        next(error);
      }
    }
  );
};

module.exports = authApi;
