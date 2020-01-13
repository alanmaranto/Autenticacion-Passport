const boom = require('@hapi/boom');

//Recibe los scopes permitidos para la ruta y lo devuelve como un middleware
const scopesValidationHandler = allowedScopes => {
  return (req, res, next) => {
    // Validar si el usuario existe y si existe validamos si el usuario tiene scopes
    if (!req.user || (req.user && !req.user.scopes)) {
      next(boom.unauthorized('Missing Scopes'));
    }

    // Si existe el user y tiene acceso
    //Verificar si tiene acceso a partir de los allowedScopes
    const hasAccess = allowedScopes
      // verifico si el allowedScope esta incluido dentro de los scopes del user
      .map(allowedScope => req.user.scopes.includes(allowedScope)) // con includes preguntamos si el scope pertenece a los allowedScopes
        // si existe devuelvo un booleano
      .find(allowed => Boolean(allowed));

    // si tiene acceso, llamamos otro middleware
    if (hasAccess) {
      next();
    } else {
        // si no tiene acceso
      next(boom.unauthorized('Insufficient Scopes'));
    }
  };
};

module.exports = scopesValidationHandler;
