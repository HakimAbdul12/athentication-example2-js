'use strict';

/**
 * A set of functions called "actions" for `registration`
 */

module.exports = {
  async registeration (ctx){
    try {
      ctx.body = 'ok you are here';
    } catch (err) {
      ctx.body = err;
    }
  }
};
