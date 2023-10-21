import { addDoc, collection, getFirestore } from "firebase/firestore"
import { useCartContext } from "../../Context/CartContext"
import { Link } from "react-router-dom"
import { useState } from "react"
import './CartContainer.css'


const CartContainer = () => {
    const [dataForm, setDataForm] = useState({
        name: '',
        phone: '',
        gmail: ''
    })
    const [id, setId] = useState('')
    const {cartList, deleteCart, precioTotal, eliminarProducto} = useCartContext()
    const handleOnChange = (evt) => {
        setDataForm({
            ...dataForm, [evt.target.name] : evt.target.value
        })
    }

    const handleAddOrder = async (evt) =>{
        evt.preventDefault()
        const order = {}
        order.buyer = dataForm
        order.items = cartList.map(prod => {
            return {id: prod.id, name: prod.name, price: prod.price, quantity: prod.cantidad}
        })
        order.total = precioTotal()

        const queryDB = getFirestore()
        const ordersCollection = collection(queryDB, 'orders')
        addDoc(ordersCollection, order)
        .then(({id}) => setId(id))
        .catch(err => console.log(err))
        .finally(()=> {
            setDataForm({
                name: '',
                phone: '',
                email: ''
            })
            deleteCart()
        })
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

                <h2 className="h2">Precio total: ${precioTotal()}</h2><br />
                <hr />
                <h4>Para terminar su compra, por favor rellene el siguiente formulario.</h4>
                <form className="form" onSubmit={handleAddOrder}>
                    <p>Nombre</p>
                    <input
                    type="text" 
                    name="name" 
                    placeholder="Ingresa tu nombre"
                    value={dataForm.name}
                    onChange={handleOnChange}/>

                    <p>Teléfono</p>
                    <input 
                    type="number" 
                    name="phone" 
                    required placeholder="Ingresa tu Teléfono"
                    value={dataForm.phone}
                    onChange={handleOnChange}/>
                    
                    <p>Correo Gmail</p>
                    <input 
                    type="text" 
                    name="gmail" 
                    required placeholder="Ingresa tu Gmail"
                    value={dataForm.gmail}
                    onChange={handleOnChange}/>
                <button className="btn1 btn btn-outline-success" onClick={handleAddOrder}>Terminar compra</button>
                </form>
            </center>
            :
                <div className="div2">
                <h2>El carrito está vacío.</h2>
                <Link to='/' className="btn btn-outline-dark">Ir a Comprar</Link>
                </div>

    )
}

export default CartContainer