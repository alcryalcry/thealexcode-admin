'use strict';

/**
 * homepage controller
 */

const { createCoreController } = require('@strapi/strapi').factories;
const { sanitizeObject, sanitizeArray } = require('../../../../utils/sanitize');

module.exports = createCoreController('api::homepage.homepage', () =>  ({
  async find(ctx) {
    try {
      const { data } = await super.find(ctx);
      const sanitizedObject = sanitizeObject(data);
      const sanitizedSocials = sanitizeArray(sanitizedObject.socials?.data);
      const sanitizedSkills = sanitizeArray(sanitizedObject.skills?.data);
      return {
        ...sanitizedObject,
        socials: sanitizedSocials,
        skills: sanitizedSkills,
      }
    } catch(e) {
      return e;
    }
  },
}));
