import React, { Component } from "react";

class ProductIcons extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        class="bg-section data-global-section lazy"
        data-bg="https://www2.arccorp.com/globalassets/destination-gateway/dg-bg-2.png"
      >
        <div class="data-overview" id={this.props.id}>
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
