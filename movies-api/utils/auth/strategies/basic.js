const passport = require('passport');
const { BasicStrategy } = require('passport-http');
const boom = require('@hapi/boom'); // Manejar errores
const bcrypt = require('bcrypt'); // Verifica si el password del user es el mismo que el pass que está en la base de datos

const UsersService = require('../../../services/users.js'); // Se encarga de busca los users por medio de un query

// Estrategia que recibe username,pass y cb que define si el usuario fue encontrado en la db
passport.use(new BasicStrategy(async (email,password, callback) => {
    const userService = new UsersService(); //implemento usersService

    //Verificamos si existe el usuario
    try {
        const user = await userService.getUser({ email }); //Obtenemos el usuario 

        // Si no existe user no autorizamos
        if(!user) {
            return callback(boom.unauthorized(), false);
        }

        //Si el password coincide con el password de la bd
        if (!(await bcrypt.compare(password, user.password))) {
            return callback(boom.unauthorized(), false);
        }

        //No es recomendable dar tanta informacion al usuario porque puede adivinar el password

        delete user.password; //eliminamos el password del objeto user para que no se visible el pass en la aplicación

        // Si no hay error, autorizamos al usuario!
        return callback(null, user);

    } catch (error) {
        return callback(error)
    }
}))