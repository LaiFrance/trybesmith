export interface IdProduct {
  id: number,
  name: string,
  amount: number,
  orderId: number
}

export interface ErrorHandler extends Error {
  status?: number;
}