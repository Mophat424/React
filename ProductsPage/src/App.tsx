import React from 'react';
import ProductsWrapper from './components/ProductsWrapper';
import ShoeType from './components/Shoetype';
import ShoeDetails from './components/ShoeDetails';

const App: React.FC = () => {
  return (
    <div>
      <ProductsWrapper>
        <ShoeType imageSrc="https://luthuli.co.ke/uploads/gallery/image/Nike-Air-Max-270-Black-Gold-AH8050-007-Mens-Size-Shoes.jpg" />
        <ShoeDetails
          name="Awesome Sneakers"
          description="Comfortable and stylish sneakers for all day wear."
          price="45.95"
          colors={['#000000', '#0047AB', '#FFA500', '#FF69B4', '#FFD700']} // Example colors
          sizes={[40, 41, 42, 43, 44, 45]} // Example sizes
        />
      </ProductsWrapper>
    </div>
  );
};

export default App;
