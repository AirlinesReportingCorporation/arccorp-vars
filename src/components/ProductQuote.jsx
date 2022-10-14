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

  render() {
    return (
      <div
      // For classname you had fluid, I'm not sure what that tied into, but would I need to add it in the turnary?
        className={this.props.className + "fluid"
        ? this.props.className + (this.props.backgroundImage ? " lazy" : "")
        : this.props.backgroundImage
        ? " lazy"
        : ""}
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
                        <div className="product-quote-copy" style={{maxWidth: "575px"}}>
                         {this.props.quote}
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
