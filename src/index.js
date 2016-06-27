import Weather from './Weather';
import Bucket from './Bucket.js';
import Greeting from './Greeting.js';
import Like from './Like.js';
import Temperature from './Temperature';
import Product from './Product.js';
import Statistics from './Statistics.js';
import StupidList from './StupidList.js';
import React from 'react';
import { render } from 'react-dom';

/*let tags = [];
for (let i =0; i < 10000; i++){
  let rnd1 = Math.floor(Math.random() * 180);
  let rnd2 = Math.floor(Math.random() * 180);
  let tag = <Sum x={rnd1} y={rnd2} />;
  tags.push(tag);

  <Temperature city='chicago' tempf={95} />
  <Product img='http://photos.appleinsidercdn.com/gallery/16301-12999-ipadair-1-l.jpg' name='ipad' price={1000} discount={10} />
  <Counter start={15}/>
  <Statistics nums={[1,1,2,3,4,5,6,1,8,9]} />
}*/

render(
  <div>
    <Weather />
    <Statistics nums={[1,1,2,3,4,5,6,1,8,9]} />
  </div>, document.getElementById('root')
);
