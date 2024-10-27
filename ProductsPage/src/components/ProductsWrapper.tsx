import React from 'react';
import '../App.css';

type ProductsWrapperProps = {
  children: React.ReactNode;
};

const ProductsWrapper = ({ children }: ProductsWrapperProps) => {
  return <div className="products-wrapper">{children}</div>;
};

export default ProductsWrapper;
