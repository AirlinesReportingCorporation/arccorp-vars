import React, { Component } from "react";

import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

class ProductLinks extends Component {
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
      <div className="box-icon" style={{ paddingTop: "30px" }}>
        <div className="container arc-pay-resources">
          <div className="box-icon-container">
            <div className="row align-items-center text-center">
              {this.props.prodLink
                ? this.props.prodLink.map((prodLink, i) => (
                    <div className={this.props.colClass ? this.props.colClass : "col-lg-auto"}>
                      <div className="box-icon-item">
                        <img
                          className="lazy box-icon-img"
                          data-src={prodLink.icon}
                          alt={prodLink.alt}
                          style={{ padding: "10px 0" }}
                        />
                        <div className="box-icon-header">{prodLink.header}</div>
                        <div className="box-icon-copy">{prodLink.copy}</div>
                        <a target="_blank" href={prodLink.link} className="link-download">
                          {prodLink.cta} <i className= {prodLink.cta ? ( prodLink.cta === "Download" ? "fas fa-chevron-down" : "fas fa-chevron-right") : ""}></i>
                        </a>
                      </div>
                    </div>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ProductLinks;
