'use strict';

module.exports = {
    appDb: 'mongodb://localhost/e-restaurant-dev',
    app: {
        title: 'Simple-node - Development Environment'
    },
    serverAddress:'http://localhost:7010/',
    port: process.env.PORT || 7010
};
