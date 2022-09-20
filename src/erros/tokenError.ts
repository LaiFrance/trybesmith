export default class UnauthorizedError extends Error {
  code: number;
  
  constructor(message: string) {
    super(message);
    this.name = 'unauthorizedError';
    this.code = 401;
  }
}