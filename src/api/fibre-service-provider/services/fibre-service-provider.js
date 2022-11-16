'use strict';

/**
 * fibre-service-provider service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fibre-service-provider.fibre-service-provider');
