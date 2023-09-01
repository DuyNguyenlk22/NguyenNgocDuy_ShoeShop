import React, { Component } from "react";
import { GIAM_SO_LUONG, TANG_SO_LUONG } from "./data";
export default class CartShoes extends Component {
  renderCart = () => {
    let { cartItem } = this.props;
    return cartItem.map((item, index) => {
      let { name, image, id, price, soLuong } = item;
      return (
        <tr key={index}>
          <td>{name}</td>
          <td>{price}</td>
          <td>
            <img src={image} width={100} alt="" />
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleTangGiam(id, GIAM_SO_LUONG);
              }}
              className="btn btn-dark"
            >
              -
            </button>
            <span className="mx-3">{soLuong}</span>
            <button
              onClick={() => {
                this.props.handleTangGiam(id, TANG_SO_LUONG);
              }}
              className="btn btn-light"
            >
              +
            </button>
          </td>
          <td>
            <button
              onClick={() => {
                this.props.handleRemoveCartItem(id);
              }}
              className="btn btn-danger"
            >
              Remove
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <table className="table">
        <thead>
          <th>Name</th>
          <th>Price</th>
          <th>Image</th>
          <th>Quantity</th>
          <th>Manipulation</th>
        </thead>
        <tbody>{this.renderCart()}</tbody>
      </table>
    );
  }
}
