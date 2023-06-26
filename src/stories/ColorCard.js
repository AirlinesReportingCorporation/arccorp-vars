import React from "react";
import {CopyToClipboard} from 'react-copy-to-clipboard';

// Add auto text color change if the background is dark enough.
// Add styles using the new spacing options.
let darkColors = [
  "Tarmac",
  "Concourse",
  "Night Shade",
  "Autopilot",
  "Landing",
  "Fuselage",
  "Teal",
  "Now Boarding",
];
export default function ColorCard(props) {
  let fontColor = darkColors.includes(props.name) ? "white" : "black";
  return (
    <div className={"sb-color-card-outer " + props.class}>
      <span className="type-font-semibold" style={{ color: fontColor }}>
        {props.name}
      </span>
      <br/>
      <span style={{ color: fontColor }}>{props.hex}</span>
      <div className="arc-pt-30">
        <span className="type-font-semibold" style={{ color: fontColor }}>
          Class:
        </span>{" "}
        <br />
        <span style={{ color: fontColor }}>
          {props.class} {props.alias != "" ? "or bg-color-" + props.alias : ""}
        </span>
      </div>
      <div
        className="arc-mt-30 type-font-semibold"
        style={{ color: fontColor }}
      >
        Accessibility:
      </div>
      <div className="row">
        <div className="col">
          <p className="type-color-black sb-accessibility-col">
            <span className="type-font-semibold">Black</span> <br /> A <br />
            {props.black ? "Pass" : "Fail"}
          </p>
        </div>
        <div className="col">
          <p className="type-color-lightgray sb-accessibility-col">
            <span className="type-font-semibold">Gray</span> <br />A <br />
            {props.gray ? "Pass" : "Fail"}
          </p>
        </div>
        <div className="col">
          <p className="type-color-white sb-accessibility-col">
            <span className="type-font-semibold">White</span> <br />A <br />
            {props.white ? "Pass" : "Fail"}
          </p>
        </div>
      </div>
      <div
        className="arc-mt-30 type-font-semibold"
        style={{ color: fontColor }}
      >
        Notes:
        <br/>
        <p>{props.note}</p>
      </div>

      <div className="d-flex">
        <CopyToClipboard text={props.hex}><a className="ctaBtn" style={{border: "1px solid #2a2b2c", marginLeft: "auto", marginRight: "auto"}}>Copy Hex</a></CopyToClipboard>
        <CopyToClipboard text={props.class}><a className={props.name == "Teal" ? "ctaBtn sbBtn-secondary" : "ctaBtn ctaBtn--main-outline"} style={{marginLeft: "auto", marginRight: "auto"}}>Copy Class</a></CopyToClipboard>
      </div>
      
    </div>
  );
}
