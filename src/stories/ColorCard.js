import React from "react";

// Add auto text color change if the background is dark enough.
// Add styles using the new spacing options.
let darkColors = ["Tarmac", "Concourse", "Nightshade","Autopilot", "Landing", "Fuselage", "Teal", "Now Boarding"]
export default function ColorCard(props) {
    return (
          <div className={"sb-color-card-outer " + props.class}>
            <p className="type-font-semibold" style={{color: (darkColors.includes(props.name) ? "white" : "black")}}>{props.name}</p>
            <div className="arc-pt-30">
            <span className="type-font-semibold" style={{color: (darkColors.includes(props.name) ? "white" : "black")}}>Class:</span> <br/>
            <span style={{color: (darkColors.includes(props.name) ? "white" : "black")}}>{props.class} {props.alias != "" ? "or bg-color-" + props.alias : ""}</span>
            </div>
          </div>
      );
    
}