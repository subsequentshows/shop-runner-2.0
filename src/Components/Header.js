import React from "react";
import logo from "../assets/img/shop-runner-logo-2.png";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import NavDropdown from "react-bootstrap/NavDropdown";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <header>
          <nav className="nav container">
            <a href="#" className="nav__logo">
              <img src={logo} alt="" />
            </a>
            <div className="nav__menu" id="nav-menu">
              <ul className="nav__list">
                <li className="nav__item">
                  <a href="#home" className="nav__link active-link">
                    Home
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#hight-light" className="nav__link">
                    Hight Light
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#case" className="nav__link">
                    Case
                  </a>
                </li>
                <li className="nav__item">
                  <a href="#products" className="nav__link">
                    Products
                  </a>
                </li>
              </ul>
              <div className="nav__close" id="nav-close">
                <i className="ri-close-line" />
              </div>
            </div>
            <div className="nav__toggle" id="nav-toggle">
              <i className="ri-function-line" />
            </div>

            {/* <a href="#" className="button button--flex">
              <span className="button--flex">
                <i className="ri-shopping-bag-line button__icon" />
              </span>
            </a> */}
            <div className="cart-wrapper">
              {/* <i className="ri-shopping-bag-line button__icon" /> */}

              <NavDropdown
                id="dropdown-autoclose-outside"
                title=" "
                menuVariant="dark"
                className="ri-shopping-bag-line button__icon"
              >
                <NavDropdown.Item href="#action/3.1">Item 1</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Item 2
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                Item 3
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.4">
                Item 4
                </NavDropdown.Item>
              </NavDropdown>
            </div>
          </nav>
        </header>
      </>
    );
  }
}
