/**
 * Created by elinaguo on 16/3/18.
 */
'use strict';

module.exports = {
  appDb: 'mongodb://localhost/e-restaurant-dev',
  app: {
    title: 'Simple-node - Production Environment'
  },
  serverAddress:'https://localhost:80/',
  port: process.env.PORT || 80
};
