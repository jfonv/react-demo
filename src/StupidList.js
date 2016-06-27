import React from 'react';
import { render } from 'react-dom';

export default (props) => {
  const sum = props.array.reduce((a,n) => a + n, 0);

console.log('props',props);
  return (
      <div>
      <h5> SUM {sum}  </h5>
        {props.array.map((result,index) =>
          <li key={result+index}>{result}</li>
        )}
      </div>
  );
}
