import React, { Component } from "react";
import Footer from "../../components/ShoesStore/Footer/Footer";
import Header from "../../components/ShoesStore/Header/Header";
import Modal from "../../components/ShoesStore/Modal/Modal";
import ProductList from "../../components/ShoesStore/ProductList/ProductList";
import data from "../../data/dataShoes.json";

class ShoesShop extends Component {
  state = {
    shoesDetail: {
      id: 0,
      name: "no-name",
      alias: "no-alias",
      price: 0,
      description: "no-description",
      shortDescription: "no-short-description",
      quantity: 0,
      image: "./img/default-thumbnail.jpg",
    },
  };
  viewShoesDetail = (shoesClick) => {
    this.setState({
      shoesDetail: shoesClick,
    });
  };
  render() {
    return (
      <>
        <div className="wrapper">
          <Header />
          <section className="pro-container mt-4">
            <div className="small-container">
              <div className="pro-title-primary text-center">
                <h1>- Shoes Shop -</h1>
              </div>
              <ProductList
                shoesList={data}
                viewShoesDetail={this.viewShoesDetail}
              />
            </div>
          </section>
          <Modal shoes={this.state.shoesDetail} />
          <Footer />
        </div>
      </>
    );
  }
}
export default ShoesShop;
