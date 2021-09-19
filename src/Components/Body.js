import React from "react";
import image1 from "../assets/img/product-top-2.png";
import image2 from "../assets/img/product-hight-light.png";

import image3 from "../assets/img/product-width-box.png";
import image4 from "../assets/img/Product-2.png";
import image5 from "../assets/img/Product-3.png";

export default class Body extends React.Component {
  render() {
    return (
      <>
        <main className="main">
          {/*=============== HOME ===============*/}
          <section className="home section" id="home">
            <div className="home__container container grid">
              <div>
                <img src={image1} alt="" className="home__img" />
              </div>

              <div className="home__data">
                <div className="home__header">
                  <h1 className="home__title">4DFWD.</h1>
                  <h2 className="home__subtitle">TAKE IT FORWARD.</h2>
                </div>

                <div className="home__footer">
                  <h3 className="home__title-description">Overview</h3>
                  <p className="home__description">
                    Run with 4DFWD for a smooth transition and a unique gliding
                    experience.
                  </p>

                  <a href="#" className="button button--flex">
                    <span className="button--flex">
                      <i className="ri-shopping-bag-line button__icon" /> Add to
                      Bag
                    </span>
                    <span className="home__price">$249</span>
                  </a>
                </div>
              </div>
            </div>
          </section>
          {/*=============== SPECS ===============*/}
          <section className="specs section grid" id="hight-light">
            <h2 className="section__title section__title-gradient">
              Hight Light
            </h2>
            <div className="specs__container container grid">
              <div className="specs__content grid">
                <div className="specs__data">
                  {/* <i class="ri-bluetooth-line specs__icon"></i> */}
                  <h3 className="specs__title">ADIDAS LEP</h3>
                  <span className="specs__subtitle">
                    The new Torsion System provides a 15% increase in forefoot
                    bending stiffness for a more responsive run.
                  </span>
                </div>
                <div className="specs__data">
                  {/* <i class="ri-battery-charge-line specs__icon"></i> */}
                  <h3 className="specs__title">INCREDIBLE ENERGY RETURN</h3>
                  <span className="specs__subtitle">
                    6% more Boost capsules ready to explode with energy in each
                    step.
                  </span>
                </div>
                <div className="specs__data">
                  {/* <i class="ri-plug-line specs__icon"></i> */}
                  <h3 className="specs__title">PRIMEBLUE</h3>
                  <span className="specs__subtitle">
                    This product is made with Primeblue, a high-performance
                    recycled material made in part with Parley Ocean Plastic.
                  </span>
                </div>
                <div className="specs__data">
                  {/* <i class="ri-mic-line specs__icon"></i> */}
                  <h3 className="specs__title">
                    ENERGY WAS JUST ENERGY UNTIL ENERGY MET ULTRABOOST 21.
                  </h3>
                  <span className="specs__subtitle">
                    Prototype after prototype. Innovation after innovation.
                    Testing after testing. Meet us in the hot pursuit of the
                    pinnacle harmonization of weight, cushioning, and
                    responsiveness. Ultraboost 21. Say hello to incredible
                    energy return.
                  </span>
                </div>
              </div>
              <div>
                <img src={image2} alt="" className="specs__img" />
              </div>
            </div>
          </section>
          {/*=============== CASE ===============*/}
          <section className="case section grid">
            <h2 className="section__title section__title-gradient">
              WHAT’S IT LIKE RUNNING WITH ULTRABOOST 21?​
            </h2>
            <div className="case__container container grid">
              <div>
                <img src={image3} alt="" className="case__img" />
              </div>
              <div className="case__data">
                <p className="case__description">
                  It’s like winning bronze, silver and gold all at the same
                  time. Take a look at life on hi energy now.​
                </p>
                <a href="#" className="button button--flex">
                  <i className="ri-information-line button__icon" /> More info
                </a>
              </div>
            </div>
          </section>
          {/*=============== DISCOUNT ===============*/}
          <section className="discount section">
            <div className="discount__container container grid">
              <div className="discount__animate">
                <h2 className="discount__title">Fitness is Calling</h2>
                <p className="discount__description">
                  Get it now, up to 50% off.
                </p>
                <a href="#" className="button button--flex">
                  <i className="ri-shopping-bag-line button__icon" /> Shop Now
                </a>
              </div>
              <img src={image4} alt="" className="discount__img" />
            </div>
          </section>
          {/*=============== PRODUCTS ===============*/}
          <section className="products section" id="products">
            <h2 className="section__title section__title-gradient products__line">
              Choose <br /> Your Style
            </h2>
            <div className="products__container container grid">
              <article className="products__card">
                <div className="products__content">
                  <img src={image5} alt="" className="products__img" />
                  <h3 className="products__title">Adizero Adios 5</h3>
                  <span className="products__price">$249</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img src={image4} alt="" className="products__img" />
                  <h3 className="products__title">Alphamagma</h3>
                  <span className="products__price">$249</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img src={image5} alt="" className="products__img" />
                  <h3 className="products__title">Ultraboost 4.0 DNA</h3>
                  <span className="products__price">$249</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img src={image4} alt="" className="products__img" />
                  <h3 className="products__title">Blue</h3>
                  <span className="products__price">$249</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img src={image5} alt="" className="products__img" />
                  <h3 className="products__title">Twilight gray</h3>
                  <span className="products__price">$249</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
            </div>
          </section>
        </main>
      </>
    );
  }
}
