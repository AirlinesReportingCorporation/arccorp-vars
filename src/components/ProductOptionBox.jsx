import React, { Component } from "react";

// From Travel Demand
// have a transparent option to place it into another component

class ProductOptionBox extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div
        class="product-option-box lazy entered loaded"
        data-bg={this.props.bg ? this.props.bg : ''}
        style={{backgroundImage: 'url(' + this.props.bg ? this.props.bg : '' +')',}}
      >
        <div class="row align-items-center">
          <div class="col-lg-4">
            <div
              class="product-option product-option-container-item"
              data-id="3"
            >
              <div class="product-option-container-item-eyebrow">
                {/* Copy on the top part of the box */}
                {this.props.prodEyebrow}
              </div>
              <div class="product-option-container-item-title">
                {/* The main text for the box */}
                {this.props.prodMain}
              </div>
              <img
                class="lazy entered loaded"
                data-src={this.props.prodIcon ? this.props.prodIcon : ""}
                alt="Snowflake"
                data-ll-status="loaded"
                src={this.props.prodIcon ? this.props.prodIcon : ""}
              />
            </div>
          </div>
          <div class="col-lg-8">
            <div class="product-copy-item">
              {this.props.rightIcon ? 
              <img
                class="lazy entered loaded"
                data-src={this.props.rightIcon}
                alt="Snowflake Logo"
                data-ll-status="loaded"
                src={this.props.rightIcon}
              /> : ""}
              <p>
                {this.props.rightCopy}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
