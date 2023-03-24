// 3 column boxes from GEt Started on Direct Connect

// consider this being an auto col in the case of only 2 or more than 3

import React, { Component } from "react";

class ThreeSquareProdBoxes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="row">
        {/* Map this over every instance of a card */}
        <div class="col-lg-4">
          <div
            class="data-icon-inner data-icon-number-inner text-center"
            style={{backgroundColor: (this.props.cardColor? this.props.cardColor : "#2a2b2c")}}
          >
            {this.props.body ? this.props.body : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default ThreeSquareProdBoxes;
