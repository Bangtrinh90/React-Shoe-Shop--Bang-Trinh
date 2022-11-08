import React, { Component } from "react";
import ProductItem from "../ProductItem/ProductItem";

class ProductList extends Component {
  renderShoesList = () => {
    return this.props.shoesList.map((shoes, idx) => {
      return (
        <div className="col-12 col-lg-4" key={idx}>
          <ProductItem
            shoes={shoes}
            viewShoesDetail={this.props.viewShoesDetail}
          />
        </div>
      );
    });
  };
  render() {
    return (
      <>
        <div className="row d-flex">{this.renderShoesList()}</div>
      </>
    );
  }
}

export default ProductList;
