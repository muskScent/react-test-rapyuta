import * as React from 'react';
import './style.css';

import Robot from './Robot';

export default function App() {
  const robots = new Array(1);

  for (let i = 0; i < robots.length; ++i) {
    robots[i] = 1;
  }

  return (
    <div>
      <Robot />
      {/* {robots.map((_, index) => {
        return <Robot key={index} />;
      })} */}
    </div>
  );
}
