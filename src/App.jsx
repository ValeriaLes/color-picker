import Button from "./Button";
import s from "./App.module.css";
import { useEffect, useState } from "react";
import Modal from "./Modal";


function App() {
  const [currentColor, setCurrentColor] = useState("white");
  const [isOpen, setIsOpen] = useState(false)

 

  const onBgColorChange = (variant) => {
    setCurrentColor(variant);
  };

  useEffect(() => {
    document.body.style.backgroundColor = currentColor;
    document.body.style.transition = "background-color 1s ease-in";
  }, [currentColor]);

  const openModal = ()  => {
    setIsOpen(!isOpen)

  }
  const closeModal = () => {
    setIsOpen(!isOpen)
  }

  return (
<div >
<div className={s.container}>
      <Button variant="white" onClick={onBgColorChange}>
        White
      </Button>
      <Button variant="blue" onClick={onBgColorChange}>
        Blue
      </Button>
      <Button variant="violet" onClick={onBgColorChange}>
        Violett
      </Button>
      <Button variant="yellow " onClick={onBgColorChange}>
        Yellow
      </Button>
      <Button variant="orange" onClick={onBgColorChange}>
        Orange
      </Button>
    </div>
    <div className={s.modalContainer}>
      <Button onClick={openModal} >Open Modal</Button>
      {isOpen && <Modal onClose={closeModal}/> }
     
      

    </div>
    </div>
  );
}

export default App;
