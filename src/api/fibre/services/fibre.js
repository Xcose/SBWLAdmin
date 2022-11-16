'use strict';

/**
 * fibre service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::fibre.fibre');
