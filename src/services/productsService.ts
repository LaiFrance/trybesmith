import connection from '../models/connection';
import { Product } from '../interfaces/productInterface';
import ProductModel from '../models/productModel';
import { validateProd } from './validacao';

class ProductService {
  private model: ProductModel;

  constructor() {
    this.model = new ProductModel(connection);
  }

  public getAll = async (): Promise<Product[]> => {
    const products = await this.model.getAll();
    return products;
  };

  public create = async (produto: Product): Promise<Product> => {
    validateProd(produto);
    const product = await this.model.create(produto);
    return product;
  };
}

export default ProductService;