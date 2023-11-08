import * as React from 'react';
import { PiletApi } from 'app-shell';
import { ProductPage } from './ProductPage';

export function setup(app: PiletApi) {
  const arrY = [
    {name: "Produce 1", price: 220, description: "Produce 1", image: "https://framerusercontent.com/images/J9AEdx3WAH9qS7NN9uEac35nip0.png", product_id: "id-1"},
    {name: "Produce 2", price: 400, description: "Produce 2", image: "https://framerusercontent.com/images/Be44ooxBaR337n4zftoGWoDto.png", product_id: "id-2"}
]
  app.registerTile('Product', ({ piral }) => ( <ProductPage productList={arrY} BuyButton={({ item }) => <piral.Extension name="buy-button" params={item} /> } /> ))
}
