import { createContext, useContext, useState } from "react";


export const CartContext = createContext([])

export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    const addProduct = (newProduct) =>{

        const index = cartList.findIndex(product => product.id === newProduct.id)

        if (index !== -1) {
            cartList[index].cantidad += newProduct.cantidad
            setCartList([...cartList])
        } else {
            setCartList([...cartList, newProduct])
        }
    }

    const cantidadTotal = () => cartList.reduce((count, objProducto) => count += objProducto.cantidad, 0)

    const precioTotal = () => cartList.reduce((precioTotal, objProduct)=> precioTotal += (objProduct.price * objProduct.cantidad) ,0)

    const eliminarProducto = (pid) => setCartList(cartList.filter(prod => prod.id !== pid))

    const deleteCart = () =>{
        setCartList([])
    }

    return (
        <CartContext.Provider value={{
            cartList,
            addProduct,
            deleteCart,
            cantidadTotal,
            precioTotal,
            eliminarProducto
        }}>
            {children}
        </CartContext.Provider>
    )
}
