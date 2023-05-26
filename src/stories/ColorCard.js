import React from "react";

// Add auto text color change if the background is dark enough.
// Add styles using the new spacing options.
export default function ColorCard(props) {
    return (
          <div className={props.class}>
            <p>{props.name}</p>
          </div>
      );
    
}