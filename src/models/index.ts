export interface IProduct {
  id: number;
  sku: number;
  title: string;
  description: string;
  filter: string[];
  style: string;
  price: number;
  installments: number;
  currencyId: string;
  currencyFormat: string;
  isNew: boolean;
}

export interface ICartProduct extends IProduct {
  quantity: number;
}

export interface ICartTotal {
  productQuantity: number;
  installments: number;
  totalPrice: number;
  currencyId: string;
  currencyFormat: string;
}

export interface IGetProductsResponse {
  data: {
    products: IProduct[];
  };
}
