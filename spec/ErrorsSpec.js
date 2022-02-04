import Errors from '../src/Errors.js'

describe('Errors', () => {
  it('should create a custom error', () => {
    const message = "Example Error";
    const error = Errors.customError(message);

    console.log(error)
    expect(error.message).toBe(message);
    expect(error instanceof Error).toBeTrue();
  });
});