import React from 'react';

export default (props) => {
  const sumO = sum(props.nums);
  const meanO = mean(props.nums);
  const medianO = median(props.nums);
  const modeO = mode(props.nums);
  const stdDevO = stdDev(props.nums);


  return (
    <div>
      <h1>Stats</h1>
        <h5>Sum:: {sumO}</h5>
        <h5>Mean:: {meanO}</h5>
        <h5>Median:: {medianO}</h5>
        <h5>Mode:: {modeO}</h5>
        <h5>Std Dev:: {stdDevO}</h5>
   </div>
  );
}

function sum(array) {
  const retVal = array.reduce( (a,v) => a+v, 0);
  return retVal;
}

function mean(array) {
  return sum(array) * 1.0 / array.length;
}

function median(arrayIn) {
  const length = arrayIn.length;
  const array = arrayIn.sort();
  let retVal = 0;
  if (length % 2 === 0) {
    const midL = Math.floor(length / 2);
    const midH = Math.ceil(length / 2);
    retVal = mean([array[midL],array[midH]]);
  } else {
     retVal = array[Math.ciel(length/2)];
  }

  return retVal;
}

function mode(array) {
return 0;
}

function stdDev(arrayIn) {
  const meanVal = mean(arrayIn);
  let tempArray = [];
  arrayIn.forEach(num => {
    tempArray.push(Math.pow(num-meanVal,2.0));
  });
  return Math.sqrt(mean(tempArray));
}
