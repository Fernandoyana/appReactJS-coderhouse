import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import './CartContainer.css'


const CartContainer = () => {
    const {cartList, deleteCart, precioTotal, eliminarProducto} = useCartContext()
    
    const handleAddOrder = () =>{
        const order = {}
        order.buyer = {name: 'Fernando', phone: '3704073302', email: 'fer34@gmail.com'}
        order.items = cartList.map(prod => {
            return {id: prod.id, name: prod.name, price: prod.price, quantity: prod.cantidad}
        })
        order.total = precioTotal()

        const queryDB = getFirestore()
        const ordersCollection = collection(queryDB, 'orders')
        addDoc(ordersCollection, order)
        .then(resp => (resp))
    }

    return (
        cartList.length > 0 ? 
            <center className="div1">
                {cartList.map(prod => 
                <div  key={prod.id}>
                    <img src={prod.imageURL} className="w-25" />
                    {prod.name} - ${prod.price} - {prod.cantidad} 
                    <button id="btnX" className="btn btn-danger" onClick={ () => eliminarProducto(prod.id) }> X </button>
                </div> )}

                <button onClick={deleteCart} className="btn1 btn btn-outline-danger">Vaciar carrito</button>
                <button className="btn1 btn btn-outline-success" onClick={handleAddOrder}>Comprar</button>
                <h2 className="h2">Precio total: ${precioTotal()}</h2>
            </center>
            :
                <div className="div2">
                <h2>El carrito está vacío.</h2>
                <Link to='/' className="btn btn-outline-dark">Ir a Comprar</Link>
                </div>

    )
}

export default CartContainer