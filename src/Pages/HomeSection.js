import React from "react";

export default class HomeSection extends React.Component {
  render() {
    return (
      <>
        <section className="home section" id="home">
          <div className="home__container container grid">
            <div>
              <img
                src="assets/img/product-top-2.png"
                alt=""
                className="home__img"
              />
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
      </>
    );
  }
}
