import React, { Component } from "react";

import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

class ProductCallout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="callout-box-container">
        <div class="container">
          <div class="callout-box teal">
            <div class="row">
              <div class="col-lg-12">
                <div className="text-center mb-4">
                  {this.props.img ? this.props.img : ""}
                </div>
                <div class="callout-box-title">{this.props.title}</div>
                <div class="callout-box-copy">
                  {this.props.subtitle}
                </div>
                <a
                  href={this.props.ctaLink}
                  class="ctaBtn ctaBtn--white product-cta"
                >
                  {this.props.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductCallout;