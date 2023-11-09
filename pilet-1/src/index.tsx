import * as React from 'react';
import { PiletApi } from 'app-shell';
import { ProductPage } from './ProductCardPage';

export function setup(app: PiletApi) {
  app.setData('cart', []);
  const addToCart = (item: { product_id: string; }) => {
    let cart = app.getData('cart');
    cart.push(item);
    app.setData('cart', cart);
  };
  const arrY = [
    {
      name: 'DAT PRO',
      price: 120,
      description: 'Produce 1 Lorepem',
      image:
        'https://dienmattroigio.com/wp-content/uploads/2023/08/tai-sao-cac-vu-tru-khong-hinh-vuong-hay-hinh-chu-nhat.jpg',
      product_id: 'id-1',
      buyBtn: <button onClick={() => addToCart({ product_id: 'id-1' })}>Add Data</button>
    },
    {
      name: 'DAT PRO 2',
      price: 300,
      description: 'Produce 2 Lorepem',
      image:
        'https://dienmattroigio.com/wp-content/uploads/2023/08/tai-sao-cac-vu-tru-khong-hinh-vuong-hay-hinh-chu-nhat.jpg',
      product_id: 'id-2',
      buyBtn: <button onClick={() => addToCart({ product_id: 'id-2' })}>Add Data</button>
    }
  ];
  app.registerTile('Product', ({ piral }) => (
    <ProductPage
      productList={arrY}
      BuyButton={({ item }) => <piral.Extension name="buy-button" params={item} />}
    />
  ));
}
