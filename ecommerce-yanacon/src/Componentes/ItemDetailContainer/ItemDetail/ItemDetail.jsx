import ItemCount from '../../ItemCount/ItemCount';
import { useCartContext } from '../../../Context/CartContext';
import './ItemDetail.css';


const ItemDetail = ({productos}) => {
    const {addProduct} = useCartContext()
    const onAdd = (cantidad) => {
        addProduct({...productos, cantidad})
    }

    return (
        <center key={productos} className='card'>
            <div className='col'>
                <img className=' img' src={productos.imageURL} alt="imagen"/>
                <p><b>{productos.name}</b></p>
                <p>{productos.description}</p>
                <p><b>${productos.price}</b></p>
            </div>
            <div className='row'>
                <ItemCount initial={1} stock={productos.stock} onAdd={onAdd}/>
            </div>
        </center>
        
    )
}

export default ItemDetail