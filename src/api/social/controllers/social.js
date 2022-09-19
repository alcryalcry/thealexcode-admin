'use strict';

/**
 * social controller
 */
const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeArray } = require('../../../../utils/sanitize');

module.exports = createCoreController('api::social.social', () =>  ({
  async find(ctx) {
    try {
      const { data } = await super.find(ctx);
      return sanitizeArray(data);
    } catch(e) {
      return e;
    }
  },
}));
