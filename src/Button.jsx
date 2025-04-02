
import s from "./Button.module.css"
export default function Button ({children, variant, onBgColorChange}) {
return (
    <button className= {s.btn} onClick={() => onBgColorChange (variant)}>{children}</button>
)

}