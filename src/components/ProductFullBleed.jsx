// From Travel Demand > Resources
// may want to make the default text color white but otherwise allow the color to be changed. Maybe similarly for eyebrow with teal

import React, {Component} from "react";
import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

class ProductFullBleed extends Component {
  constructor(props){
    super(props)
  }

  
  render() {
    return (
      <div class="product-full-bleed lazy entered loaded" data-bg={this.props.bg ? this.props.bg : ''} data-ll-status="loaded" style={{backgroundImage: 'url(' + this.props.bg ? this.props.bg : '' + ')'}}>
    <div class="container">
      <div class="row">
        <div class="col-lg-5">
          {this.props.eyebrow ? <div class="product-eyebrow">{this.props.eyebrow}</div> : ""}
          <div class="product-section-header white">
            {this.props.prodHeader}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-7">
          {this.props.prodCopy ? <div class="product-subheader white">
            {this.props.prodCopy}
          </div> : ""}
          {this.props.cta ? <a href={this.props.ctaLink} class="ctaBtn  product-cta">{this.props.cta}</a> : ""}
        </div>
      </div>
    </div>
  </div>
    )
  }
}

