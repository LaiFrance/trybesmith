export interface Product {
  id?: number;
  name: string;
  amount: string;
  orderId?: number;
}

export interface Order {
  id?: number;
  userId: number;
}
