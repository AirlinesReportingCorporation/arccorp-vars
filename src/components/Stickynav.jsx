import React, { Component } from "react";
import stickybits from "stickybits";

class Stickynav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    stickybits(".arc-sticky-container");
  }

  render() {
    if (this.props.rightLink) {this.props.stickyCTALink = this.props.rightLink}
    return (
      <div className="arc-sticky-container" style={{ zIndex: "3" }}>
        <div
          className={
            this.props.className
              ? this.props.className + " arc-sticky-inner"
              : "bg-color-teal arc-sticky-inner"
          }
        >
          <div className="arc-sticky-nav">
            <div className="arc-sticky-brand d-flex align-items-center">
              <a
                href={this.props.pageLink ? this.props.pageLink : "#top"}
                className="arc-sticky-title"
                style={{ lineHeight: "20px" }}
              >
                {this.props.title}
              </a>
            </div>
            <div className="arc-sticky-links d-flex align-items-center">
              {this.props.links
                ? this.props.links.map((link, i) => (
                    <a href={link.url} className="arc-sticky-link">
                      {link.title}
                    </a>
                  ))
                : ""}
            </div>
            {/* do we want to show a contact us always? or will there come a time where we want to hide the CTA part if not needed */}
            <div className="arc-sticky-menu d-flex align-items-center">
              <a
                href={
                  this.props.stickyCTALink
                    ? this.props.stickyCTALink
                    : "https://www2.arccorp.com/about-us/contact-us/"
                }
                className="arc-sticky-link-right"
                target={this.props.target}
              >
                {this.props.stickyCTA ? this.props.stickyCTA : "Contact Us"}{" "}
                <i className="fas fa-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Stickynav;
