import { useEffect } from "react";
import s from "./Modal.module.css";
import { useId } from "react";

export default function Modal({ onClose, values, setValues, onSave }) {
  const handleBackDropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose]);

  const fnameID = useId();
  const lnameID = useId();
  const chooseLang = useId();
  const gender = useId();
  const cond = useId();
  const cond2= useId();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(values);
    setValues({
      fname: '',
      lname:'',
      language:'ua',
      gender:'',
      terms:false,
      sendData: false
  
    })


   
  };

  const handleChange = (e) => {

    if (e.target.type === 'checkbox') {
      setValues({ ...values, [e.target.name]: e.target.checked });
     
    } else {
      setValues({ ...values, [e.target.name]: e.target.value });
    }
  };

  

  return (
    <>
      <div className={s.wrapper} onClick={handleBackDropClick}>
        <div className={s.modal}>
          <h1 className={s.title}>Registration</h1>

          <form action="" onSubmit={handleSubmit}>
            <label htmlFor={fnameID}>First name:</label>
            <input
              type="text"
              name="fname"
              id={fnameID}
              value={values.fname}
              onChange={handleChange}
            />

            <label htmlFor={lnameID}>Last name:</label>
            <input
              type="text"
              name="lname"
              id={lnameID}
              value={values.lname}
              onChange={handleChange}
            />
            <label htmlFor={chooseLang}>Choose a language:</label>
            <select name="language" id={chooseLang} value={values.language} onChange={handleChange}>
              <option value="ua">ukranian</option>
              <option value="en">english</option>
              <option value="de">german</option>
              <option value="sp">spanish</option>
            </select>
            <label htmlFor={gender}>
              <input type="radio" id={gender} name='gender' value='male' onChange={handleChange}  checked={values.gender === "male"}/>
            </label>  
            <label htmlFor={gender}>
              <input type="radio" id={gender} name='gender' value='female' onChange={handleChange} checked={values.gender === "female"}/>
            </label>
            <label htmlFor={gender}>
              <input type="radio" id={gender} name='gender' value='non-gender' onChange={handleChange} checked={values.gender === "non-gender"}/>
            </label>

            <label htmlFor={cond}>
              <input type="checkbox" id={cond} name='terms' checked={values.terms} onChange={handleChange}/>
            </label>
            <label htmlFor={cond2}>
              <input type="checkbox" id={cond2} name='sendData' checked={values.sendData} onChange={handleChange}/>
            </label>
           

            <button type="submit" disabled={!(values.terms && values.sendData)}>Send</button>
          </form>
          <button onClick={onClose} className={s.closeBtn}>
            x
          </button>
        </div>
      </div>
    </>
  );
}
