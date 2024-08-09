import React,{useState} from 'react'
import "./header.css"
import logo from "../../assets/logo.svg"
import { RiMenu2Fill } from "react-icons/ri";


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
                        <ul className="nav__collection">
                            <li>Каталог </li>
                            <li>Доставка</li>
                            <li>Условия</li>
                            <li>Контакты</li>
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

export default Header