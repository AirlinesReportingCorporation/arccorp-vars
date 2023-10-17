import React from "react";

import ProductJumbo from "../components/ProductJumbo";
import "./main.scss";

export default {
  title: "Example/ProductJumbo",
  component: ProductJumbo,
};

const Template = (args) => (
  <div className="full-width">
    <ProductJumbo {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  className: "",
  width:"",
  backgroundImage:
    "https://www2.arccorp.com/globalassets/destination-gateway/dg-jumbo.png",
  title: "Looking for a more custom data solution?",
  subtitle: (
    <>
      <span>
        You are selling more than a location; you are creating an experience.
      </span>{" "}
      Appeal to more visitors by incorporating travel data insights into your
      destination management and marketing strategies.
    </>
  ),
  ctaTitle: "Learn More",
  ctaLink: "https://arccorp.com/",
};
