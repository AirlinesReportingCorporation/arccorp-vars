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
    return this.props.type == "component" ? (
      <div class="row arc-icon-card-row">
        {this.props.iconCards
          ? this.props.iconCards.map((card, i) => (
              <div class="col-lg-6">
                <div
                  style={card.cardStyle}
                  class="arc-icon-card d-flex align-items-center"
                >
                  <div class="arc-icon-card-image">
                    <div class="lazyload-wrapper">
                      <img
                        class="lazy"
                        style={card.imageStyle}
                        src={card.image}
                      />
                    </div>
                  </div>

                  <div
                    class="arc-icon-card-copy"
                    style={card.copyStyle}
                  >
                    {card.copy}
                  </div>
                </div>
              </div>
            ))
          : ""}
      </div>
    ) : (
      <div
        className={
          this.props.class
            ? this.props.class + " bg-section lazy"
            : "bg-section lazy"
        }
        style={{ backgroundImage: this.props.bg ? this.props.bg : "" }}
        data-bg={this.props.bg}
      >
        <div class={this.props.bg} id={this.props.id}>
          <div class="product-icon-container">
            <div class="text-center">
              <div class="row">
                {this.props.copy ? (
                  <div class="col-lg-12">
                    <div
                      className="product-icon-title text-center"
                      style={{ marginTop: "60px" }}
                    >
                      {this.props.copy}
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>

              <div class="row arc-icon-card-row">
                {this.props.prodIcons
                  ? this.props.prodIcons.map((prodIcons, i) => (
                      <div class="col-lg-6">
                        <div class="arc-icon-card d-flex align-items-center">
                          <div class="arc-icon-card-image">
                            <div class="lazyload-wrapper">
                              <img class="lazy" src={prodIcons.image} />
                            </div>
                          </div>

                          <div class="arc-icon-card-copy">{prodIcons.copy}</div>
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

export default IconCard;
