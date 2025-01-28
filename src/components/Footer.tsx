import { useCart } from "../hooks/useCart"
import "./Footer.css"

export function Footer () {
    const {cart} = useCart()
    return (
        <footer className="footer">
            {/* <h4>Prueba tecnica de React ⚛️</h4>
            <span>github.com/CRodrigo47</span>
            <h5>Usando useContext y useReducer</h5> */}
            {
                JSON.stringify(cart)
            }
        </footer>
    )
}