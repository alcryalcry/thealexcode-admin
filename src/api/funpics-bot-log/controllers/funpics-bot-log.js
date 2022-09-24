'use strict';

/**
 * funpics-bot-log controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeArray } = require('../../../../utils/sanitize');

module.exports = createCoreController('api::funpics-bot-log.funpics-bot-log', () =>  ({
  async find(ctx) {
    try {
      const { data } = await super.find(ctx);

      return sanitizeArray(data, ['updatedAt', 'publishedAt']); 
    } catch(e) {
      return e;
    }
  },
}));

