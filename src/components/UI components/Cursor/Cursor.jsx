import { useState, useEffect } from "react";

import "./CursorStyles.css";

const Cursor = () => {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      setPositionX(event.pageX);
      setPositionY(event.pageY);
    });
  }, []);
  return (
    <div
      className="cursor"
      style={{
        left: positionX,
        top: positionY,
      }}
    />
  );
};

export default Cursor;
