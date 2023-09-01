import React, { Component } from "react";

export default class DetailShoes extends Component {
  render() {
    let { image, name, price, quantity, description } = this.props.itemDetail;
    return (
      <div className="mt-5">
        <h3 className="mb-5">Shoes Detail</h3>
        <div className="row">
          <div className="col-6">
            <img src={image} alt="" />
          </div>
          <div className="col-6">
            <table className="table text-left">
              <tbody>
                <tr>
                  <td className="font-weight-bold">Name</td>
                  <td>{name}</td>
                </tr>
                <tr>
                  <td className="font-weight-bold">Price</td>
                  <td>{price}</td>
                </tr>
                <tr>
                  <td className="font-weight-bold">Quantity</td>
                  <td>{quantity}</td>
                </tr>
                <tr>
                  <td className="font-weight-bold">Description</td>
                  <td>{description}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
