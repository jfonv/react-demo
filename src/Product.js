import React from 'react';

export default (props) => {
  const price = props.price;
  const percentage = props.discount;
  const discount = (price *(percentage/100));
  const salePrice = price - discount;

  return (
    <div>
      <h1>{props.name}- ${price} discount: {percentage}% sale price: ${salePrice}</h1>
      <img src={props.img} />
    </div>
 );
}
