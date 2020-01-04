const express = require('express');
const supertest = require('supertest');

const testServer = (route) => {
    const app = express();
    app.use(express.json())
    route(app);
    return supertest(app);
}

module.exports = testServer;