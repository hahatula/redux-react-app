import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
  <nav>
    <ul className="header__menu">
        <Link to="/click">Click for fun</Link>
        <Link to="/shop">Visit fake store</Link>
    </ul>
 </nav>);
}
export default Header;
