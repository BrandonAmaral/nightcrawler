import { CustomError } from '@common/errors/CustomError';

export class NotAuthorizedError extends CustomError {
  statusCode = 401;

  constructor(message = 'Not Authorized') {
    super(message);

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors() {
    return [{ message: this.message }];
  }
}
