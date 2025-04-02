import Button from "./Button";
import s from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [currentColor, setCurrentColor] = useState("white");

  const onBgColorChange = (variant) => {
    setCurrentColor(variant);
  };

  useEffect(() => {
    document.body.style.backgroundColor = currentColor;
    document.body.style.transition = "background-color 1s ease-in";
  }, [currentColor]);

  return (
    <div className={s.container}>
      <Button variant="white" onBgColorChange={onBgColorChange}>
        White
      </Button>
      <Button variant="blue" onBgColorChange={onBgColorChange}>
        Blue
      </Button>
      <Button variant="violet" onBgColorChange={onBgColorChange}>
        Violett
      </Button>
      <Button variant="yellow " onBgColorChange={onBgColorChange}>
        Yellow
      </Button>
      <Button variant="orange" onBgColorChange={onBgColorChange}>
        Orange
      </Button>
    </div>
  );
}

export default App;
