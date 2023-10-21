import ItemCount from '../../ItemCount/ItemCount';
import { useCartContext } from '../../../Context/CartContext';
import './ItemDetail.css';
import { useState } from 'react';
import { Link } from "react-router-dom"


const ItemDetail = ({productos}) => {
    const [isCounter, setIsCounter] = useState(true)
    const {addProduct} = useCartContext()

    const onAdd = (cantidad) => {
        addProduct({...productos, cantidad})
        setIsCounter(false)
    }

    return (
        <center key={productos} className='card'>
            <div className='col'>
                <img className=' img' src={productos.imageURL} alt="imagen"/>
                <p><b>{productos.name}</b></p>
                <p>{productos.description}</p>
                <p><b>${productos.price}</b></p>
            </div>
            <div className='row'>{
                isCounter ?
                <ItemCount initial={1} stock={productos.stock} onAdd={onAdd}/>
                :
                <>
                <Link to={'/cart'}>
                    <button className='btn btn-outline-dark'>Ir al Carrito</button>
                </Link>
                <Link to={'/'}>
                <button className='btn btn-outline-dark'>Seguir comprando</button>
                </Link>
                </>
            }
            </div>
        </center>
        
    )
}

export default ItemDetail