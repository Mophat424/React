// import React from 'react';

type ShoeTypeProps = {
  imageSrc: string; 
};

const ShoeType = ({ imageSrc }: ShoeTypeProps) => {
  return (
    <div>
      <img src={imageSrc} alt="Shoe" style={{ width: '100%' }} /> {/* A simple image */}
    </div>
  );
};

export default ShoeType;