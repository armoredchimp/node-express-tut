const { StatusCodes } = require("http-status-codes");
const CustomAPIError = require("./custom-error");

class BadRequest extends CustomAPIError {
  constructor(message) {
    super(message);
    this.stausCode = StatusCodes.BAD_REQUEST;
  }
}

module.exports = BadRequest;
