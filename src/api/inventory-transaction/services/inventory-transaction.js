'use strict';

/**
 * inventory-transaction service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::inventory-transaction.inventory-transaction');
