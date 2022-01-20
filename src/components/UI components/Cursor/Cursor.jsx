import { useState, useEffect, useRef } from "react";

import "./CursorStyles.css";

const Cursor = () => {
  let cursor = useRef(null);
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);
  const [text, setText] = useState(null);

  useEffect(() => {
    document.addEventListener(
      "mousemove",
      (event) => {
        setPositionX(event.pageX);
        setPositionY(event.pageY);
        event.target.classList.forEach((className) => {
          if (className) {
            if (
              className === "shadow" ||
              className === "project" ||
              className === "project-title" ||
              className === "description"
            ) {
              setText("See Project");
              cursor.current.classList.add("cursor-active");
            } else if (className === "Email" || className === "me") {
              setText("Email");
              cursor.current.classList.add("cursor-active");
            } else if (className === "Download" || className === "CV") {
              setText("CV");
              cursor.current.classList.add("cursor-active");
            } else if (className === "all-projects") {
              setText("All Projects");
              cursor.current.classList.add("cursor-active");
            } else if (className === "web-dev") {
              setText("A damn good one");
              cursor.current.classList.add("cursor-active");
            } else {
              setText(null);
              cursor.current.classList.remove("cursor-active");
            }
          }
        });
      },
      false
    );
  }, []);

  return (
    <div
      className="cursor"
      ref={cursor}
      style={{
        left: positionX,
        top: positionY,
      }}
    >
      {text && <h4 className="cursor-text">{text}</h4>}
    </div>
  );
};

export default Cursor;
