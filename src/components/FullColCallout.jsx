// The OurData from homepage
// Need to update the css for this to work for all pages. 
import React, { Component } from "react";
import LazyLoad from "vanilla-lazyload";

if (!document.lazyLoadInstance) {
  document.lazyLoadInstance = new LazyLoad({
    elements_selector: ".lazy",
  });
}

class FullColCallout extends Component() {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    document.lazyLoadInstance.update();
  }

  render() {
    return (
      <div class="row">
        <div class="col-lg-12">
          <div
            class="arc-homepage-card lazy entered loaded"
            data-bg={this.props.backgroundImage ? this.props.backgroundImage : "https://www2.arccorp.com/globalassets/homepage/redesign/march-update/our_data.jpg"}
            style={{
                  marginBottom: "90px",
                  backgroundImage: "url(" + (this.props.backgroundImage ? this.props.backgroundImage : 'https://www2.arccorp.com/globalassets/homepage/redesign/march-update/our_data.jpg') + ");"
            }}
            data-ll-status="loaded"
          >
            <div class="row align-items-center no-gutters">
              <div class="col-lg-12" style={{minHeight: "auto", height: "auto"}}>
                <div class="arc-homepage-data d-flex flex-column">
                  {this.props.cardTitle ? <div class="arc-homepage-data-title">{this.props.cardTitle}</div> : "" }
                  { this.props.cardCopy ? <p class="arc-homepage-data-copy">
                    {this.props.cardCopy}
                  </p> : ""}
                  {this.props.ctaCopy ? <div>
                    <a
                      class="ctaBtn ctaBtn--white-outline"
                      href={this.props.ctaLink}
                    >
                      {this.props.ctaCopy}
                    </a>
                  </div> : "" }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default FullColCallout;
