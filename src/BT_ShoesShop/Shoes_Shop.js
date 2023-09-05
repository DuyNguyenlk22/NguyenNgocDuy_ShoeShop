import React, { Component } from "react";
import CartShoes from "./CartShoes";
import ProductList from "./ProductList";
import DetailShoes from "./DetailShoes";
import { dataShoes } from "./data";

export default class Shoes_Shop extends Component {
  state = {
    dataShoes: dataShoes,
    cart: [],
    detail: {},
  };
  handleAddToCart = (shoeItem) => {
    console.log(
      "🚀 ~ file: Shoes_Shop.js:14 ~ Shoes_Shop ~ shoeItem:",
      shoeItem
    );
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => item.id == shoeItem.id);
    if (index == -1) {
      let newCart = { ...shoeItem, soLuong: 1 };
      cloneCart.push(newCart);
    } else {
      cloneCart[index].soLuong++;
    }
    this.setState({
      cart: cloneCart,
    });
  };
  handleRemoveCartItem = (id) => {
    console.log("🚀 ~ file: Shoes_Shop.js:31 ~ Shoes_Shop ~ id:", id);
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => item.id == id);
    cloneCart.splice(index, 1);
    this.setState({
      cart: cloneCart,
    });
  };
  handleTangGiam = (id, option) => {
    let cloneCart = this.state.cart;
    let index = cloneCart.findIndex((item) => item.id == id);
    if (option == true) {
      cloneCart[index].soLuong++;
    } else {
      cloneCart[index].soLuong--;
      cloneCart[index].soLuong == 0 && this.handleRemoveCartItem(id);
    }
    this.setState({
      cart: cloneCart,
    });
  };
  handleChangeDetail = (item) => {
    this.setState({
      detail: item,
    });
  };
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-6">
            <CartShoes
              handleTangGiam={this.handleTangGiam}
              handleRemoveCartItem={this.handleRemoveCartItem}
              cartItem={this.state.cart}
            />
          </div>
          <div className="col-6 p-0">
            <ProductList
              handleChangeDetail={this.handleChangeDetail}
              handleAddToCart={this.handleAddToCart}
              dataShoes={dataShoes}
            />
          </div>
        </div>
        <DetailShoes itemDetail={this.state.detail} />
      </div>
    );
  }
}
