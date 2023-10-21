import { useEffect, useState } from "react"
import './ItemCount.css'


const ItemCount = ({initial, stock, onAdd}) => { 
    const [counter, setCounter] = useState(initial)

    const handleAdd = () => {
        if(counter < stock) {
            setCounter(counter + 1)
        }
    }

    const handleSubtract = () => {
        if(counter > initial) {
            setCounter(counter - 1)
        }
    }

    const handleOnAdd = () => {
        onAdd(counter)
    }
    
    return (
        <center>
            <div> 
                    <button onClick={handleSubtract} className="btn btn-outline-danger"> - 1 </button>
                <label>
                    <strong>{ counter }</strong>
                </label>
                    <button onClick={handleAdd} className="btn btn-outline-success"> + 1 </button><hr />
                <button onClick={handleOnAdd}>Agregar al carrito</button>
            </div>
        </center>
    )
} 

export default ItemCount