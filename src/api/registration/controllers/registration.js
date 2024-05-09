'use strict';

/**
 * A set of functions called "actions" for `registration`
 */
const crypto = require('crypto');
const _ = require('lodash');
const { concat, compact, isArray } = require('lodash/fp');
const utils = require('@strapi/utils');
const {
  contentTypes: { getNonWritableAttributes },
} = require('@strapi/utils');
const { getService } = require('@strapi/plugin-users-permissions/server/utils/index.d.ts');
const {
  validateCallbackBody,
  validateRegisterBody,
  validateSendEmailConfirmationBody,
  validateForgotPasswordBody,
  validateResetPasswordBody,
  validateEmailConfirmationBody,
  validateChangePasswordBody,
} = require('../../node_modules/@strapi/plugin-users-permissions/server/controllers/validation/auth.js');

const { getAbsoluteAdminUrl, getAbsoluteServerUrl, sanitize } = utils;
const { ApplicationError, ValidationError, ForbiddenError } = utils.errors;

const sanitizeUser = (user, ctx) => {
  const { auth } = ctx.state;
  const userSchema = strapi.getModel('plugin::users-permissions.user');

  return sanitize.contentAPI.output(user, userSchema, { auth });
};

module.exports = {
  async registeration (ctx){
    try {
      ctx.body = 'ok you are here';
    } catch (err) {
      ctx.body = err;
    }
  }
};
