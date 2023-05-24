import React, { Component } from "react";

import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

class ProductQuote extends Component {
  constructor(props) {
    super(props);
  }

  // Update lazyLoad after rerendering of every image
  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  render() {
    return (
      <div
        className={
          this.props.className
            ? this.props.className + " fluid product-quote product-quote-bg lazy"
            : "fluid product-quote product-quote-bg lazy"
        }
        id={this.props.id}
        data-bg={this.props.backgroundImage}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="product-quote-container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="d-flex">
                      <div className="product-quote-mark">&ldquo;</div>
                      <div>
                        <div
                          className="product-quote-copy"
                          style={{ maxWidth: "575px" }}
                        >
                          {this.props.quote} &rdquo;
                        </div>
                        <div className="product-quote-name">
                          <strong>{this.props.author}</strong>
                          <br />
                          {this.props.title}
                          <br />
                          {this.props.company}
                        </div>
                        {/* <a
                          href="https://www2.arccorp.com/products-participation/customer-success-stories"
                          className="ctaBtn ctaBtn--secondaryOnImage"
                        >
                          More Customer Stories
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductQuote;
