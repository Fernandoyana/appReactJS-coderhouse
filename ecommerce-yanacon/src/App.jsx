import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'
import CartContainer from './Componentes/CartContainer/CartContainer'
import Navbar from './Componentes/Navbar/Navbar'
import { CartContextProvider } from './Context/CartContext'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';





function App() {
  return(
    <Router>
      <CartContextProvider>
        <Navbar/>
        <Routes>
          <Route path='/' element={<ItemListContainer/>}/>
          <Route path='/category/:cid' element={<ItemListContainer/>}/>
          <Route path='/detalle/:pid' element={<ItemDetailContainer/>}/>
          <Route path='/cart' element={<CartContainer/>}/>
        </Routes>
      </CartContextProvider>
    </Router>
  )
}

export default App
