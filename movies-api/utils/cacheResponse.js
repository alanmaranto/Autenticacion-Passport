const { config } = require('../config');

const cacheReponse = (res, seconds) => {
    if (!config.dev) {
        res.set('Cache-Control', `public, max-age=${seconds}`);
    }
}

module.exports = cacheReponse;