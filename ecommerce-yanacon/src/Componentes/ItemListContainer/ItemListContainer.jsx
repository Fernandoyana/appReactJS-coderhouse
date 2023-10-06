import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from "firebase/firestore"
import './ItemListContainer.css'


const ItemListContainer = () => {
    const [productos, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const {cid} = useParams()

    useEffect(()=> {
        if (cid) {
            const db = getFirestore()
            const queryCollection = collection(db, 'Productos')
            const queryFilter = query(queryCollection, where('category', '==', cid))
            getDocs(queryFilter)
            .then(resp => setProducts(resp.docs.map (prod => ( {id: prod.id, ...prod.data()} ) ) ) )
            .then(resp => (resp))
            .catch(err => (err))
            .finally(()=> setLoading(false))
        } else {
            const db = getFirestore()
            const queryCollection = collection(db, 'Productos')
            getDocs(queryCollection)
            .then(resp => setProducts(resp.docs.map (prod => ( {id: prod.id, ...prod.data()} ) ) ) )
            .then(resp => (resp))
            .catch(err => (err))
            .finally(()=> setLoading(false))
        }
    }, [cid])

    return (
            <div className="body-card">
                {loading ? <h2 className="loading">Cargando...</h2> 
                    : 
                    <>
                    <ItemList productos={productos}/>
                    </>
                }
            </div>
        )
}
export default ItemListContainer

