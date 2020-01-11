const MongoLib = require('../lib/mongo');

class ApiKerService {
    constructor() {
        this.collection = 'api-keys';
        this.mongoDB = new MongoLib();
    }

    //Metodo que obtiene la apikey con el token
    async getApiKey ({ token }) {
        const [apiKey] = await this.mongoDB.getAll(this.collection, { token });
        return apiKey;
    }
}

module.exports = ApiKerService;