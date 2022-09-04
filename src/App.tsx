import * as React from 'react';

import Robot from './Robot';

export default function App() {
  const robots = new Array(1);

  for (let i = 0; i < robots.length; ++i) {
    robots[i] = 1;
  }

  return (
    <div>                
      {robots.map((_) => {
        return <Robot key={Math.random()} />;
      })}
    </div>
  );
}
