import { useState, useEffect } from "react";

const colors = ["blue", "yellow", "red", "green", "gray"];

export default function AlertColorChanger() {
  const [currentColor, setCurrentColor] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentColor((currentColor + 1) % colors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentColor]);

  const divStyle = {
    backgroundColor: colors[currentColor],
  };

  return (
    <div className="flex items-center justify-center p-5 ">
      <div
        className="w-1/3 p-10 text-white border-2 border-yellow-200 border-dashed shadow-lg rounded-xl"
        style={divStyle}
      ></div>
    </div>
  );
}
