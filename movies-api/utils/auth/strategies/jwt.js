const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const boom = require('@hapi/boom');

const UsersService = require('../../../services/users'); // De aqui buscaremos el usuario por el email que extraigamos del JWT
const { config } = require('../../../config'); // De aqui le haremos saber a la estrategia con que secret fue firmado el JWT y sepa si es valido

passport.use(
  new Strategy(
    {
      secretOrKey: config.authJwtSecret, // recibe el jwtsecret
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken() //especificamos de donde sacamos el jwt, en este caso lo enviaremos en las peticiones en el token
    },
    // en la funcion cb recibimos token y error
    async (tokenPayload, callback) => {
      const usersService = new UsersService();

      try {
        const user = await usersService.getUser({ email: tokenPayload.email });

        if (!user) {
          return callback(boom.unauthorized(), false);
        }

        delete user.password;
        callback(null, { ...user, scopes: tokenPayload.scopes });
      } catch (error) {
        return callback(error);
      }
    }
  )
);
