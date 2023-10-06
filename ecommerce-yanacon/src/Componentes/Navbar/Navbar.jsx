import { Nav, NavbarBrand } from "react-bootstrap"
import { Link, NavLink } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"
import CartWidget from "../CartWidget/CartWidget"
import "./Navbar.css"

const Navbar = () => {
    const {cantidadTotal} = useCartContext()
    return (
        <navbar class="navbar navbar navbar-expand-lg">
            <div class="container-fluid">
                <NavLink id="nombre" to='/'>
                    <a class="navbar-brand">Maldito<span>Skate</span> </a>
                </NavLink>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <Nav class="navbar-nav me-auto mb-lg-0">
                        <NavLink id="link" className={({isActive})=>isActive ? 'btn btn-primary' : 'btn btn-outline-dark'} to="/category/zapatillas">Zapatillas</NavLink>
                        <NavLink id="link" className={({isActive})=>isActive ? 'btn btn-primary' : 'btn btn-outline-dark'} to="/category/indumentaria">Indumentaria</NavLink>
                    </Nav>
                    
                    <Nav class="d-flex" role="search">
                            <NavLink to="/cart">
                                <CartWidget/> 
                            </NavLink>
                            <div class='cantidad'>
                                {cantidadTotal()}
                            </div>
                    </Nav>
                </div>
            </div>
        </navbar>
    )
}
export default Navbar