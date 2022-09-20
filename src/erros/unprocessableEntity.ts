export default class UnprocessableEntity extends Error {
  code: number;
  
  constructor(message: string) {
    super(message);
    this.name = 'unprocessableEntity';
    this.code = 422;
  }
}