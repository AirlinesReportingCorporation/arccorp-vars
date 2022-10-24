import React, { Component } from "react";

import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

class ProductIcons extends Component {
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
        class={this.props.className ? this.props.className + " bg-section lazy" : "bg-section lazy"}
        data-bg={this.props.bg}
      >
        <div class={this.props.bg} id={this.props.id}>
          <div class="product-icon-container">
            <div class="text-center">
              <div class="row">
                <div class="col-lg-12">
                  <div
                    className="product-icon-title text-center"
                    style={{ marginTop: "60px" }}
                  >
                    {this.props.copy}
                  </div>
                </div>
              </div>

              <div class="row ss-row">
                {this.props.prodIcons
                  ? this.props.prodIcons.map((prodIcons, i) => (
                      <div class="col-lg-6">
                        <div class="ss-system-info-item d-flex align-items-center">
                          <div class="product-icon-img">
                            <div class="lazyload-wrapper">
                              <img class="lazy" src={prodIcons.image} />
                            </div>
                          </div>

                          <div class="product-icon-copy">{prodIcons.copy}</div>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductIcons;
