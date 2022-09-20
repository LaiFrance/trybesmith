import { User } from '../interfaces/userInterfaces';
import { Product } from '../interfaces/productInterface';
import RequiredError from '../erros/index';
import UnprocessableEntity from '../erros/unprocessableEntity';

const validateAmount = (amount: string): void => {
  if (!amount) {
    throw new RequiredError('"amount" is required');
  }
  if (typeof amount !== 'string') {
    throw new UnprocessableEntity('"amount" must be a string');
  }
  if (amount.length < 3) {
    throw new UnprocessableEntity('"amount" length must be at least 3 characters long');
  }
};

export const validateProd = (prod: Product): void => {
  const { name, amount } = prod;
  if (!name) {
    throw new RequiredError('"name" is required');
  }
  if (typeof name !== 'string') {
    throw new UnprocessableEntity('"name" must be a string');
  }
  if (name.length < 3) {
    throw new UnprocessableEntity('"name" length must be at least 3 characters long');
  }
  validateAmount(amount);
};

const validateClasse = (classe: string): void => {
  if (!classe) {
    throw new RequiredError('"classe" is required');
  }
  if (typeof classe !== 'string') {
    throw new UnprocessableEntity('"classe" must be a string');
  }
  if (classe.length < 3) {
    throw new UnprocessableEntity('"classe" length must be at least 3 characters long');
  }
};

const validateLevel = (level: number): void => {
  if (level <= 0) {
    throw new UnprocessableEntity('"level" must be greater than or equal to 1');
  }
  if (!level) {
    throw new RequiredError('"level" is required');
  }
  if (typeof level !== 'number') {
    throw new UnprocessableEntity('"level" must be a number');
  }
};

const validatePass = (password: string | undefined): void => {
  if (!password) {
    throw new RequiredError('"password" is required');
  }
  if (typeof password !== 'string') {
    throw new UnprocessableEntity('"password" must be a string');
  }
  if (password.length < 8) {
    throw new UnprocessableEntity('"password" length must be at least 8 characters long');
  }
};

export const validateUser = (user: User): void => {
  const { username, classe, level, password } = user;
  if (!username) {
    throw new RequiredError('"username" is required');
  }
  if (typeof username !== 'string') {
    throw new UnprocessableEntity('"username" must be a string');
  }
  if (username.length < 3) {
    throw new UnprocessableEntity('"username" length must be at least 3 characters long');
  }
  validateClasse(classe);
  validateLevel(level);
  validatePass(password);
};
