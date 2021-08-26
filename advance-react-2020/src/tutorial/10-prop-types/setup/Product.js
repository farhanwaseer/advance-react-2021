import React from "react";

const Product = ({ name, image, price }) => {
  return (
    <article className="product">
   <h4>Single product</h4>
      {/* <h4>{name}</h4>
      <p>${price}</p> */}
    </article>
  );
};

export default Product;
