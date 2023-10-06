import { Link } from "react-router-dom"

const Item = ({productos}) => {
    return (
        <div key={productos.id} className="card">
            <div className="card-body ">
                <img className='w-100 card-img-top' src={productos.imageURL} alt="imagen de producto" />
                <p>{productos.name}</p>
                <p><b>${productos.price}</b></p>
            </div>
            
            <div className='card-footer'>
                <Link to={`/detalle/${productos.id}`}>
                <button className='btn btn-outline-dark'>Detalles</button>
                </Link> 
            </div>                                                                                   
        </div>)
}

export default Item