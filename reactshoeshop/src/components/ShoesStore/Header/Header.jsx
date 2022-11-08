import React, { Component, Fragment } from "react";

class Header extends Component {
  render() {
    return (
      <Fragment>
        <section className="top-header">
          <div className="top-header-container">
            <div className="top-header-logo">
              <a href="#home">
                <img src="./image/image 3.2.png" alt="" className="img-fluid" />
              </a>
            </div>
            <div className="top-header-auth">
              <a href="#home" className="header-login">
                Home
              </a>
              <a href="#shop" className="header-register">
                Shop
              </a>
            </div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Header;
