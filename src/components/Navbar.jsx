import { LuHeart , LuUserCircle} from "react-icons/lu";
import { FiShoppingCart } from "react-icons/fi";
import "./Navbar.css";
function Navbar() {
  return (
    <header className="navbar">
        <div className="navbar-nav container">
            <div className="navbar-left">
                <h1>REACT SNEAKERS</h1>
                <p>Магазин лучших кроссовок</p>
            </div>
            <ul className="navbar-actions">
                <li>
                    <FiShoppingCart />
                    <p>1205 руб.</p>
                </li>
                <li>
                    <LuHeart />
                    <p>Закладки</p>
                </li>
                <li>
                    <LuUserCircle />
                    <p>Профиль</p>
                </li>
            </ul>
        </div>
    </header>
  )
}

export default Navbar;