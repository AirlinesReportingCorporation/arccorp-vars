// 3 column boxes from Get Started on Direct Connect

import React, { Component } from "react";

class ProductBoxes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        {this.props.prodBoxes
                  ? this.props.prodBoxes.map((box, i) => (
        <div classname="col-lg-4">
          <div classname="data-icon-inner data-icon-number-inner text-center" style="padding-bottom: 35px">
            <div classname="data-icon-number">{box.number}</div>
            <div classname="data-icon-grid-text">{box.text}</div>
            <div classname="data-icon-grid-label">{box.label}</div>
            <div style="margin-top: 1.5rem">
              {box.links ? (box.links.length > 1 ? box.links.map((link, i) => (
                 <a target="_blank" href={link.url} classname="link-download">{link.cta}<i classname="fas fa-chevron-right"></i></a>
              )) : <a target="_blank" href={link.url} classname="link-download" style="margin-right: 1rem">{link.cta}<i classname="fas fa-chevron-right"></i></a> ) : "" }
            </div>
          </div>
        </div>
        )) : "" }
      </div>
    ) 
  }
}

export default ProductBoxes;