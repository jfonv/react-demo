import React from 'react';

export default (props) => {
  const tempf = (props.tempf === undefined ) ? ((props.tempc * 9 / 5) + 32) : props.tempf;
  const tempc = (props.tempc === undefined ) ? ((props.tempf - 32) * 5 / 9) : props.tempc;
  let city = props.city.split('');
  city[0] = city[0].toUpperCase();
  const tCity = city.join('');

  return (
    <div>
      <h1>{tCity} - {tempf}°F, {tempc}°C</h1>
   </div>
  );
}
