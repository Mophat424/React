// import React from 'react';

type ShoeDetailsProps = {
  name: string;
  description: string;
  price: string;
  colors: string[];
  sizes: number[];
};

const ShoeDetails = ({ name, description, price, colors, sizes }: ShoeDetailsProps) => {
  return (
    <div className="shoe-details">
      <h1>{name}</h1>
      <p>{description}</p>
      <div className="color-options">
        <h4>Colour</h4>
        <div className="color-dots">
          {colors.map((color, index) => (
            <span
              key={index}
              className="color-dot"
              style={{ backgroundColor: color }}
            ></span>
          ))}
        </div>
      </div>
      <div className="size-options">
        <h4>Size</h4>
        <div className="size-buttons">
          {sizes.map((size, index) => (
            <button key={index} className="size-button">
              {size}
            </button>
          ))}
        </div>
      </div>
      <button className="buy-button">Buy</button>
      <p className="price">€{price}</p>
    </div>
  );
};

export default ShoeDetails;
