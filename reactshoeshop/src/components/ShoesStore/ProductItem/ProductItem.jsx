import React, { Component } from "react";

class ProductItem extends Component {
  render() {
    let { name, alias, price, image } = this.props.shoes;
    return (
      <div>
        <div className="pro-card-primary">
          <img
            src={image}
            data-fancybox="gallery"
            data-src={image}
            data-caption={name}
            alt={alias}
          />
          <div className="card-text-primary">
            <h4>{name}</h4>
            <p>
              {price.toLocaleString("en-US", {
                style: "currency",
                currency: "USD",
              })}
            </p>
            <div className="card-button">
              <button
                type="button"
                data-toggle="modal"
                data-target="#modelId"
                className="btn-buy d-flex justify-content-center align-items-center"
                onClick={() => {
                  this.props.viewShoesDetail(this.props.shoes);
                }}
              >
                <span>
                  Add to cart <i className="fa fa-cart-plus"></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductItem;
