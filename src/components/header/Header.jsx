import React,{useState, memo} from 'react'
import "./header.css"
import logo from "../../assets/logo.svg"
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";

function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div>
        <div className="header">
            <div className="container">
                <nav className="navbar">
                    <img src={logo} alt="" />
                    <div className={`nav__collect ${isMenuOpen ? "show" : ""}`}>
                      <ul className="hidden md:flex nav__collection">
                        <li>
                          <Link to={"/"}> Home</Link>
                        </li>
                        <li>
                          <Link to={"/katalog"}> Каталог</Link>
                        </li>
                        <li>
                          <Link to={"/доставка"}>Доставка</Link>
                        </li>
                        <li>
                          <a href="/notFound"> Условия </a>
                        </li>
                        <li>
                        <Link to={"/login"}>Login</Link>
                        </li>
                          <li>
                            <Link to={"/call"}>Контакты</Link>
                          </li>
                      </ul>
                    </div>
                    <div className="number">
                        <h4>+ 375 736 463 64 72  /  + 375 736 463 64 72</h4>
                        <p>Заказать звонок</p>
                    </div>
                    <div onClick={toggleMenu} className="navbar__menu">
            <RiMenu2Fill />
          </div>
                </nav>
            </div>
        </div>
    </div>
  )
}

export default memo (Header)