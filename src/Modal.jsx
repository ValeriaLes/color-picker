import { useEffect } from "react";
import s from "./Modal.module.css"

export default function Modal({onClose}) {

  const handleBackDropClick = (e) => {
    if(e.target === e.currentTarget) {
      onClose();
    }
  }



  useEffect(() => {
    const onKeyDown = (e) => {
      if(e.key === 'Escape') {
        onClose()
      }
      
    }
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

    
  return (
    <>
     <div className={s.wrapper} onClick={handleBackDropClick}>
     <div className={s.modal}>
        <h1 className ={s.title}>Questionnaire</h1>

        <p>
          Ein Text kann jedes beliebige Beispiel geschriebener oder gesprochener
          Sprache sein, von etwas so Komplexem wie einem Buch oder einem
          juristischen Dokument bis hin zu etwas so Einfachem wie dem Text einer
          E-Mail oder den Worten auf der Rückseite einer Müslipackung.
        </p>
        <button onClick={onClose} className={s.closeBtn}>x</button>
      </div>
     </div>
    </>
  );
}
