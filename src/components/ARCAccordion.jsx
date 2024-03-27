import React, { useEffect, useState } from "react";

export default function ARCAccordion(props) {
  const [isShowing, setShowing] = useState(false);

  useEffect(() => {
    let showing = props.showing;
    if (showing) {
      setShowing(true);
    } else {
      setShowing(false);
    }
  }, [props.showing]);

  const toggleShow = () => {
    setShowing(!isShowing);
  };

  return (
    <div
      id={props.id}
      className={
        props.className ? "arc-accordion " + props.className : "arc-accordion"
      }
    >
      <div
        className={
          (isShowing
            ? "accordionRow active alert-box"
            : "accordionRow alert-box") +
          (props.highlighted ? " fraud-highlight" : "")
        }
      >
        <div className="accordionRowTop">
          <div
            className={
              isShowing
                ? "accordionRowStart container-fluid active"
                : "accordionRowStart container-fluid"
            }
            onClick={toggleShow}
          >
            <div className="row align-items-center">
              <div className="col-11">
                <div className="d-flex flex-column flex-lg-row">
                  <div className="">
                    <div className="accordionName" id={props.anchor}>
                      {props.name}
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-1">
                <div>
                  <div className="apExpand">
                    <div className={isShowing ? "fs-close" : "fs-open"}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={
              isShowing
                ? "accordionRowInfo show animated slideInDown"
                : "accordionRowInfo"
            }
          >
            <div className="row no-gutters">
              <div className="col">
                <div className="apSection apSectionMargin">
                  <div className="apSectionBottom">{props.body}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
