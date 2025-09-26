import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import { useSelector } from "react-redux";
import { Home, Search, Bell, User } from 'lucide-react';
import './navbar.css'
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
    // get user from localStorage 
    const user = JSON.parse(localStorage.getItem('users'));

    // navigate 
    const navigate = useNavigate();

    // logout function 
    const logout = () => {
        localStorage.clear('users');
        navigate("/login")
    }

    const cartItems = useSelector((state)=> state.cart);

    // navList Data
    const navList = (
        <ul className="flex space-x-3 text-white font-medium text-md px-5 items-center">
            {/* Home */}
            <li>
                <Link to={'/'}>Inicio</Link>
            </li>

            {/* All Product */}
            <li>
                <Link to={'/allproduct'}>Productos</Link>
            </li>

            {/* Signup */}
            {!user ? <li>
                <Link to={'/signup'}>Registrarse</Link>
            </li> : ""}

            {/* Signup */}
            {!user ? <li>
                <Link to={'/login'}>Iniciar Sesión</Link>
            </li> : ""}

            {/* User */}
            {user?.role === "user" && <li>
                <Link to={'/user-dashboard'}>User</Link>
            </li>}

            {/* Admin */}
            {user?.role === "admin" && <li>
                <Link to={'/admin-dashboard'}>Admin</Link>
            </li>}

            {/* logout */}
            {user && <li className=" cursor-pointer" onClick={logout}>
                Salir 
            </li>}

            {/* Cart */}
            <li>
                <Link to={'/cart'} className="flex justify-center align-center">
                    <FaShoppingCart size={15} color="#fff" /><span className="item-counter">{cartItems.length}</span>
                </Link>
            </li>
            <li className="ml-20">
                <SearchBar />
            </li>
        </ul>
    )
    return (
        <nav className="bg-[#000000] sticky top-0">
            {/* main  */}
            <div className="lg:flex lg:justify-between items-center py-3 lg:px-3 ">
                {/* left  */}
                <div className="left py-3 lg:py-0">
                    <Link to={'/'}>
                        <h2 className=" font-bold text-white text-2xl text-center">Nebula Shop</h2>
                    </Link>
                </div>

                {/* right  */}
                <div className="flex justify-center align-center ">
                    {navList}
                </div>

            </div>
        </nav>
    );
}

export default Navbar;