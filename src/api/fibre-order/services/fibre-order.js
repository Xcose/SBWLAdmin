'use strict';

/**
 * fibre-order service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fibre-order.fibre-order');
