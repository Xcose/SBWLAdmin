'use strict';

/**
 * fibre-service-provider router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::fibre-service-provider.fibre-service-provider');
