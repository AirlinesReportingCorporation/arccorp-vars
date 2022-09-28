import React, { Component } from "react";

class ProductText extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        id={this.props.id}
        className={
          this.props.className
            ? this.props.className + (this.props.backgroundImage ? " lazy" : "")
            : this.props.backgroundImage
            ? " lazy"
            : ""
        }
        data-bg={this.props.backgroundImage}
      >
        <div className="callout-container">
          <div className="container">
            <div className="row">
              <div className="col-lg-10">
                <div className="product-eyebrow">{this.props.eyebrow}</div>
                <h2
                  className={
                    "product-header " +
                    (this.props.titleClass ? this.props.titleClass : "")
                  }
                >
                  {this.props.title}
                </h2>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12">
                <div
                  className={
                    "product-callout-copy " +
                    (this.props.subTitleClass ? this.props.subTitleClass : "")
                  }
                >
                  {this.props.subtitle}
                </div>
              </div>
            </div>
            {this.props.body ? this.props.body : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default ProductText;
