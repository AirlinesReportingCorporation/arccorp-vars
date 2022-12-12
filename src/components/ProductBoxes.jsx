// 3 column boxes from Get Started on Direct Connect

import React, { Component } from "react";

class ProductBoxes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    {console.log(this.props.prodBoxes)}
    return (
      <div className="container">
        <div className="row">
        {this.props.prodBoxes
                  ? this.props.prodBoxes.map((box, i) => (
        <div className="col-lg-4">
          <div className="data-icon-inner data-icon-number-inner text-center" style={box.links ? {paddingBottom: "35px"} : {paddingBottom: ''}}>
            <div className="data-icon-number">{box.number}</div>
            <div className="data-icon-grid-text">{box.text}</div>
            <div className="data-icon-grid-label">{box.label}</div>
            {console.log(box.links ? 'true' : 'false')}
            <div>
              {box.links ? (box.links.map((link, i) => (
                 <a target="_blank" href={link.url} className="link-download">{link.cta}<i className="fas fa-chevron-right"></i></a>
              ))) : "" }
            </div>
          </div>
        </div>
        )) : "" }
      </div>
      </div>
    ) 
  }
}

export default ProductBoxes;