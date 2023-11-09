import * as React from 'react';
import { Link } from 'react-router-dom';
import type { PiletApi } from 'app-shell';

const Page = React.lazy(() => import('./Page'));

export function setup(app: PiletApi) {
  app.on('store-data', ({name}) => {
    if(name === 'cart') {
      app.registerMenu('cart-menu', () => <Link to="/cart">Cart - {app.getData('cart').length} </Link>);
      console.log(app.getData('cart').length);
    }
  })
  app.registerMenu('cart-menu', () => <Link to="/cart">Cart - {app.getData('cart').length} </Link>);
  app.registerPage('/cart', Page);
}
