import { useEffect, useState } from "react"
import ItemDetail from "./ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore"
import './ItemDetailContainer.css'

const ItemDetailContainer = () => {
    const [productos,setProducts] = useState({})
    const {pid} = useParams()
    

    useEffect(()=> {
        const db = getFirestore()
        const queryDoc = doc(db, 'Productos', pid)
        getDoc(queryDoc)
        .then(resp => ({id: resp.id, ...resp.data()}))
        .then(resp => setProducts(resp))
    }, [])

    return (
        <center>
            <h3 className="h3">DETALLES</h3>
            <ItemDetail productos={productos}/>
        </center>
    )
}

export default ItemDetailContainer