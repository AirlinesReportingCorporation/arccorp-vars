// Fix this to have a title, copy and also fixe the icon cards to be able to expand like on intern page

import React, { Component } from "react";

import LazyLoad from "vanilla-lazyload";
import IconCard from "./IconCard";

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
    let className
    this.props.class ? className = this.props.class : className = this.props.className
    return (
      <IconCard
        className={className}
        bg={this.props.bg}
        id={this.props.id}
        copy={this.props.copy}
        prodIcons={this.props.prodIcons}
        type={this.props.type}
      />
    );
  }
}

export default ProductIcons;
