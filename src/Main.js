import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Categories from "./Models/Categories";
import AddCategory from "./Category/AddCategory";
import EditCategory from "./Category/EditCategory";
import Brands from "./Models/Brands";
import AddBrand from "./Brand/AddBrand";
import EditBrand from "./Brand/EditBrand";
import Contacts from "./Models/Contacts";
import AddContact from "./Contact/AddContact";
import EditContact from "./Contact/EditContact";
import Products from "./Models/Products";
import AddProduct from "./Product/AddProduct";
import EditProduct from "./Product/EditProduct";
import UserPage from "./Pages/UserPage";
import AboutPage from "./Pages/AboutPage";
import HomePage from "./Pages/HomePage";

import "./assets/css/common.css";

export default class Main extends React.Component {
  render() {
    //name và price trong product truyền vào props của con
    //ls.map là vòng lặp
    //nội dung khác nhau nằm trong switch hay nó là các component(thành phần ) khác nhau
    //tạo 1 công tắc để đi đến các đường dẫn khác nhau, khai báo đường dẫn trong đây exact để kiểm tra
    //nếu đường lẫn trên trình duyệt chính xác thì chuyển trang
    return (
      <div className="content-wrapper">
        <section className="content">
          <div className="container-fluid">
            <nav>
              <ul className="switch-tab">
                <li>
                  <Link to="/Home">Home Page</Link>
                </li>
                <li>
                  <Link to="/About">Our Product</Link>
                </li>
                <li>
                  <Link to="/Users">Users</Link>
                </li>
                <li>
                  <Link to="/Products">Products</Link>
                </li>
              </ul>
            </nav>

            <Switch>
              <Route path="/categories" exact>
                <Categories />
                {/*<Route path="/category/:id" exact>*/}
                {/*    <Category/>*/}
                {/*</Route>*/}
                {/*<Route path="/product/:id" exact>*/}
                {/*    <Product2/>*/}
              </Route>
              <Route path="/about">
                <AboutPage />
              </Route>
              <Route path="/users">
                <UserPage />
              </Route>
              <Route path="/home">
                <HomePage />
              </Route>
              <Route path="/add-category" exact>
                <AddCategory />
              </Route>
              <Route path="/edit-category/:id" exact>
                <EditCategory />
              </Route>
              <Route path="/brands" exact>
                <Brands />
              </Route>
              <Route path="/add-brand" exact>
                <AddBrand />
              </Route>
              <Route path="/edit-brand/:id" exact>
                <EditBrand />
              </Route>
              <Route path="/contacts" exact>
                <Contacts />
              </Route>
              <Route path="/add-contact" exact>
                <AddContact />
              </Route>
              <Route path="/edit-contact/:id" exact>
                <EditContact />
              </Route>
              <Route path="/products" exact>
                <Products />
              </Route>
              <Route path="/add-product" exact>
                <AddProduct />
              </Route>
              <Route path="/edit-product/:id" exact>
                <EditProduct />
              </Route>
            </Switch>
          </div>
        </section>
      </div>
    );
  }
}
