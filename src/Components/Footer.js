import React from "react";
import logo from "../assets/img/shop-runner-logo-2.png";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <footer className="footer section">
          <div className="footer__container container grid">
            <a href="#" className="footer__logo">
              <img src={logo} alt="" />
            </a>
            <div className="footer__content">
              <h3 className="footer__title">Products</h3>
              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">
                    Shoes
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Clothing
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Accesories
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__content">
              <h3 className="footer__title">Contact</h3>
              <ul className="footer__links">
                <li>
                  <a href="#" className="footer__link">
                    Tel: (+84) 123 456 789
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Email: info@shoprunner.com.vn
                  </a>
                </li>
                <li>
                  <a href="#" className="footer__link">
                    Ha Noi, Viet Nam
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer__content">
              <form action className="footer__form">
                <input
                  type="email"
                  placeholder="Email"
                  className="footer__input"
                />
                <button className="button button--flex">
                  <i className="ri-send-plane-line button__icon" /> Subscribe
                </button>
              </form>
              <div className="footer__social">
                <a
                  href="https://www.facebook.com/shop-runner"
                  target="_blank"
                  className="footer__social-link"
                >
                  <i className="ri-facebook-fill" />
                </a>
                <a
                  href="https://www.instagram.com/shop-runner"
                  target="_blank"
                  className="footer__social-link"
                >
                  <i className="ri-instagram-line" />
                </a>
                <a
                  href="https://twitter.com/shop-runner"
                  target="_blank"
                  className="footer__social-link"
                >
                  <i className="ri-twitter-line" />
                </a>
              </div>
            </div>
          </div>
          <p className="footer__copy">
            <a
              href="https://www.youtube.com/c/Bedimcode/"
              target="_blank"
              className="footer__copy-link"
            >
              © Shop Runner. All right reserved
            </a>
          </p>
        </footer>

        <a href="#" class="scrollup" id="scroll-up">
          <i class="ri-arrow-up-s-line scrollup__icon"></i>
        </a>
      </>
    );
  }
}
