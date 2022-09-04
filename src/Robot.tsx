import React from 'react';
import { useState, useEffect } from 'react';
import { getRandomInt } from './Utils';

export default function Robot() {
  const [x, setX] = useState(getRandomInt(0, 100));
  const [y, setY] = useState(getRandomInt(0, 100));

  const positionInterval = setInterval(() => {
    setX(getRandomInt(0, 100));
    setY(getRandomInt(0, 100));
  }, 1000);

  useEffect(() => {
    clearInterval(positionInterval);
    return () => {
      clearInterval(positionInterval);
    };
  }, [x, y]);

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
