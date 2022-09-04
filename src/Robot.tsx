import React from "react";
import { useState, useEffect } from "react";
import { getRandomInt } from "./Utils";

export default function Robot() {
  const [x, setX] = useState(getRandomInt(1, 100_000));
  const [y, setY] = useState(getRandomInt(1, 100_000));

  useEffect(() => {
    const positionInterval = setInterval(() => {
      setX(getRandomInt(1, 100_000));
      setY(getRandomInt(1, 100_000));
    }, 100);
    return () => {
      clearInterval(positionInterval);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        left: `${x / 1000}%`,
        top: `${y / 1000}%`,
      }}
    >
      🤖
    </div>
  );
}
