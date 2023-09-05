import React, { Component } from "react";

export default class DetailShoes extends Component {
  render() {
    let { image, name, price, quantity, description } = this.props.itemDetail;
    return (
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Shoe Details
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="row">
                <img src={image} alt="" />

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
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
