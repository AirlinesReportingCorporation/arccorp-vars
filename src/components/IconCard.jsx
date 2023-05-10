// Fix this to have a title, copy and also fixe the icon cards to be able to expand like on intern page

import React, { Component } from "react";

import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

class IconCard extends Component {
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

  // Adjust the classes to be independant of the sales stats page

  render() {
    return (
      <div class="row ss-row icon-card-row">
        {this.props.iconCards
          ? this.props.iconCards.map((card, i) => (
              <div class="col-lg-6">
                <div style={card.cardStyle} class="ss-system-info-item icon-card d-flex align-items-center">
                  <div class="product-icon-img icon-card-image">
                    <div class="lazyload-wrapper">
                      <img class="lazy" style={card.imageStyle} src={card.image} />
                    </div>
                  </div>

                  <div class="product-icon-copy icon-card-copy" style={card.copyStyle} >{card.copy}</div>
                </div>
              </div>
            ))
          : ""}
      </div>
    );
  }
}

export default IconCard;
