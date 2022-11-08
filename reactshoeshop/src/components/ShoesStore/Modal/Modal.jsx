import React, { Component } from "react";

class Modal extends Component {
  render() {
    let { name, price, shortDescription, quantity, image } = this.props.shoes;
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">{name}</h5>
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
                <div className="container-fluid">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name:</th>
                        <th>{name}</th>
                      </tr>
                      <tr>
                        <th>Price:</th>
                        <th>
                          {price.toLocaleString("en-US", {
                            style: "currency",
                            currency: "USD",
                          })}
                        </th>
                      </tr>
                      <tr>
                        <th>Description:</th>
                        <th>{shortDescription}</th>
                      </tr>
                      <tr>
                        <th>Quantity:</th>
                        <th>{quantity}</th>
                      </tr>
                      <tr>
                        <th className="table-image">Image:</th>
                        <th>
                          <img
                            data-fancybox="responsive"
                            data-src={image}
                            src={image}
                            data-caption={name}
                            alt=""
                            style={{
                              width: 100,
                              height: 100,
                              cursor: "pointer",
                            }}
                          />
                        </th>
                      </tr>
                    </thead>
                  </table>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Modal;
