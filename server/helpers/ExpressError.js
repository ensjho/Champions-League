/** Helper class which extends from the Normal JS error where
 *  one can add a status.
 */

class ExpressError extends Error {
  constructor(message, status) {
    super();
    this.message = message;
    this.status = status;
  }
}

module.exports = ExpressError;
