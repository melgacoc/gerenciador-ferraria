export interface IProduct {
  id?: number,
  name: string;
  amount: string;
  orderId: number,
}

export interface NewProduct {
  id?: number,
  name: string;
  quantity: number;
}
