import * as React from 'react';
import { useState, useEffect } from 'react';
import { getRandomInt } from './Utils';

export default function Robot() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const positionInterval = setInterval(() => {
    setX(getRandomInt(0, 100));
    setY(getRandomInt(0, 100));
  }, 1000);

  useEffect(() => {
    return () => {
      clearInterval(positionInterval);
    };
  }, []);

  return (
    <div
      style={{
        position: 'absolute',
        left: `${x}%`,
        top: `${y}%`,
      }}
    >
      🤖
    </div>
  );
}
