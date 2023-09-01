import React, { Component } from "react";
import ItemProduct from "./ItemProduct";

export default class ProductList extends Component {
  renderListShoes = () => {
    let { dataShoes, handleAddToCart, handleChangeDetail } = this.props;
    return dataShoes.map((item, index) => {
      return (
        <ItemProduct
          handleChangeDetail={handleChangeDetail}
          handleAddToCart={handleAddToCart}
          key={index}
          item={item}
        />
      );
    });
  };
  render() {
    return <div className="row">{this.renderListShoes()}</div>;
  }
}
