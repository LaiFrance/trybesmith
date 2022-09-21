export interface Order {
  id?: number;
  userId: number;
  productsIds?: Array<number>;
}