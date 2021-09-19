import React from "react";
import image1 from "../assets/img/Product-2.png";
import image2 from "../assets/img/IMG Product/png-clipart-nike-air-max-nike-free-air-force-shoe-nike-white-outdoor-shoe-thumbnail.png";

import image3 from "../assets/img/IMG Product/png-clipart-nike-free-air-force-nike-air-max-shoe-men-shoes-blue-white-thumbnail.png";
import image4 from "../assets/img/IMG Product/png-clipart-pair-of-green-and-white-low-top-shoes-puma-shoe-sneakers-nike-footwear-green-running-shoes-orange-fashion-thumbnail.png";
import image5 from "../assets/img/IMG Product/png-clipart-nike-air-max-sneakers-shoe-air-jordan-men-shoes-white-basketballschuh-thumbnail.png";
import image6 from "../assets/img/IMG Product/png-clipart-nike-free-air-force-nike-air-max-shoe-men-shoes-blue-white-thumbnail.png";
import image7 from "../assets/img/IMG Product/png-clipart-shoe-nike-air-max-sneakers-running-running-shoes-orange-outdoor-shoe-thumbnail.png";
import image8 from "../assets/img/IMG Product/2.png";
import image9 from "../assets/img/IMG Product/png-clipart-unpaired-black-white-and-red-air-jordan-shoe-air-jordan-shoe-sneakers-nike-jordan-spizike-air-jordan-basketball-shoes-white-fashion-thumbnail.png";
import image10 from "../assets/img/IMG Product/png-clipart-air-force-1-nike-air-max-skate-shoe-sneakers-nike-blue-white-thumbnail.png";

export default class ProductMainSection extends React.Component {
  render() {
    return (
      <>
        <main className="main">
          {/*=============== PRODUCTS ===============*/}
          <section className="products section" id="products">
            <h2 className="section__title section__title-gradient products__line">
              Our Products
            </h2>
            <div className="products__container container grid">
              <article className="products__card">
                <div className="products__content">
                  <img src={image1} alt="" className="products__img" />
                  <h3 className="products__title">Adizero Adios 5</h3>
                  <span className="products__price">$249</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              {/*=============== Chỉnh sửa ===============*/}
              <article className="products__card">
                <div className="products__content">
                  <img src={image2} alt="" className="products__img" />
                  <h3 className="products__title">Jordan White</h3>
                  <span className="products__price">$269</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img src={image1} alt="" className="products__img" />
                  <h3 className="products__title">Alphamagma</h3>
                  <span className="products__price">$249</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img src={image3} alt="" className="products__img" />
                  <h3 className="products__title">Nike Air Max</h3>
                  <span className="products__price">$239</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img src={image4} alt="" className="products__img" />
                  <h3 className="products__title">Pair Of Green And White</h3>
                  <span className="products__price">$249</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img src={image1} alt="" className="products__img" />
                  <h3 className="products__title">Ultraboost 4.0 DNA</h3>
                  <span className="products__price">$249</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img src={image5} alt="" className="products__img" />
                  <h3 className="products__title">Air Jordan Men </h3>
                  <span className="products__price">$239</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img src={image6} alt="" className="products__img" />
                  <h3 className="products__title">Air force nike</h3>
                  <span className="products__price">$289</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img
                    src={image8}
                    alt=""
                    className="products__img"
                  />
                  <h3 className="products__title">Blue</h3>
                  <span className="products__price">$249</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img
                    src={image4}
                    alt=""
                    className="products__img"
                  />
                  <h3 className="products__title">Nike Air Max Blue Teal</h3>
                  <span className="products__price">$219</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img
                    src={image8}
                    alt=""
                    className="products__img"
                  />
                  <h3 className="products__title">
                    Nike Air Max White Outdoor{" "}
                  </h3>
                  <span className="products__price">$249</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img
                    src={image7}
                    alt=""
                    className="products__img"
                  />
                  <h3 className="products__title">
                    Nike Footwear Green Running
                  </h3>
                  <span className="products__price">$239</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img
                    src={image2}
                    alt=""
                    className="products__img"
                  />
                  <h3 className="products__title">Twilight gray</h3>
                  <span className="products__price">$249</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img
                    src={image5}
                    alt=""
                    className="products__img"
                  />
                  <h3 className="products__title">
                    Paris nike footwear purple outdoor
                  </h3>
                  <span className="products__price">$279</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img src={image7} alt="" className="products__img" />
                  <h3 className="products__title">Nike Air Max Running</h3>
                  <span className="products__price">$269</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img src={image8} alt="" className="products__img" />
                  <h3 className="products__title">Air Jordan wwhite orange</h3>
                  <span className="products__price">$219</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img src={image9} alt="" className="products__img" />
                  <h3 className="products__title">Air Jordan Spizike</h3>
                  <span className="products__price">$289</span>
                  <button className="button button--flex products__button">
                    <i className="ri-shopping-bag-line button__icon" />
                  </button>
                </div>
              </article>
              <article className="products__card">
                <div className="products__content">
                  <img src={image10} alt="" className="products__img" />
                  <h3 className="products__title">Air Force 1 Nike</h3>
                  <span className="products__price">$239</span>
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
