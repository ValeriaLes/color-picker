
import s from "./Button.module.css"
export default function Button ({children, variant, onClick}) {
return (
    <button className= {s.btn} onClick={() => onClick (variant)}>{children}</button>
)

}