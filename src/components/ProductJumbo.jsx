import React, { Component } from "react";

import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

class ProductJumbo extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    document.lazyLoadInstance.update();
  }

  // Update lazyLoad after rerendering of every image
  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  render() {
    return (
      <div
        className={
          (this.props.className ? this.props.className : "") +
          " atd-jumbo lazy text-left"
        }
        data-bg={this.props.backgroundImage}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div
                style={{
                  maxWidth: this.props.width ? this.props.width : "600px",
                }}
              >
                <h2 className="product-header white">{this.props.title}</h2>
                <a
                  href={this.props.ctaLink}
                  className="ctaBtn product-cta "
                  style={{ marginLeft: "0" }}
                >
                  {this.props.ctaTitle ? this.props.ctaTitle : "Learn More"}
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <div className="product-callout">
                <h3
                  className="product-callout-copy teal"
                  style={{ maxWidth: "900px" }}
                >
                  {this.props.subtitle}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductJumbo;
