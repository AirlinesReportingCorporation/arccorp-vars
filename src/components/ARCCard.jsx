import React from "react";

function ARCCard(props) {
  return (
    <a
      href={props.url ? props.url : "https://www2.arccorp.com"}
      className="arc-card-outer"
    >
      <div
        id={props.id ? props.id : ""}
        className={"arc-card" + (props.className ? props.className : "") + (props.cardType ? "arc-"+ props.cardType + "-card" : "")}
      >
        {props.children}
      </div>
    </a>
  );
}

function Title(props) {
  return <div className="arc-card-image-title">{props.children}</div>;
}

function Desc(props) {
  return <div className="arc-card-image-desc">{props.children}</div>;
}

function Body(props) {
  return (
    <div id={props.id} className={"arc-card-body " + props.className}>
      {props.children}
    </div>
  );
}

function Image(props) {
  return (
    <div className="arc-card-image-top">
      <div
        className="arc-card-image"
        style={{ backgroundImage: "url(" + (props.image ? props.image : "") + ")" }}
      ></div>
    </div>
  );
}

ARCCard.Title = Title;
ARCCard.Desc = Desc;
ARCCard.Body = Body;
ARCCard.Image = Image;

export default ARCCard;
