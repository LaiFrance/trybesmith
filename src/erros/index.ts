export default class RequiredError extends Error {
  code: number;

  constructor(message: string) {
    super(message);
    this.name = 'requiredError';
    this.code = 400;
  }
}