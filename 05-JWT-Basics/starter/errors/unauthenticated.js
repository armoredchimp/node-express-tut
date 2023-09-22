const CustomAPIError = require("./custom-error");

class Unauthenticated extends CustomAPIError {
  constructor(message) {
    super(message);
    this.stausCode = 401;
  }
}

module.exports = Unauthenticated;
