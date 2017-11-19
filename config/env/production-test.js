/**
 * Created by elinaguo on 16/3/18.
 */
'use strict';

module.exports = {
  appDb: 'mongodb://localhost/e-restaurant-dev',
  app: {
    title: 'Simple-node - Production Test Environment'
  },
  serverAddress:'https://localhost:7010/',
  port: process.env.PORT || 7010
};
