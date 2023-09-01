import React, { Component } from "react";

export default class ItemProduct extends Component {
  render() {
    let { item, handleAddToCart, handleChangeDetail } = this.props;
    return (
      <div className="card text-left col-3 p-0">
        <img className="card-img-top" src={item.image} alt />
        <div className="card-body">
          <h5 className="card-title">{item.name}</h5>
          <p className="card-text">{item.shortDescription}</p>
          <button
            onClick={() => {
              handleAddToCart(item);
            }}
            className="btn btn-info mr-3"
          >
            Add
          </button>
          <button
            onClick={() => {
              handleChangeDetail(item);
            }}
            className="btn btn-primary"
          >
            View
          </button>
        </div>
      </div>
    );
  }
}
