import * as React from 'react';
export interface ProductCardProps {
  product_id?: string;
  name: string;
  price: number;
  description: string;
  image: string;
  buyBtn?: React.ReactNode;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  description,
  image,
  buyBtn
}) => {
  return (
    <div className="col-sm-12 col-md-4 card mt-3">
      <img src={image} alt="Image header" />
      <div className="card-body">
        <div className="card-title">{name}</div>
        <div className="card-title">Price: {price}</div>
        <p className="card-text">{description}</p>
        {buyBtn}
      </div>
    </div>
  );
};
