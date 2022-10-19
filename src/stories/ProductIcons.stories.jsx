import React from "react";

import ProductIcons from "../components/ProductIcons";
import "./main.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ProductIcons",
  component: ProductIcons,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ProductIcons {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  className: "",
  bg: "https://www2.arccorp.com/globalassets/destination-gateway/dg-bg-2.png",
  id: "product-icons",
  copy: "Testing Product Icons Copy",
  prodIcons: [
    {
      image:
        "https://www2.arccorp.com/globalassets/destination-gateway/dg-icon-1.png",
      alt: "Strategic Planning",
      copy: "Strategic Planning",
    },
    {
      image:
        "https://www2.arccorp.com/globalassets/destination-gateway/dg-icon-2.png",
      alt: "Foresight and Planning",
      copy: "Foresight and Planning",
    },
    {
      image:
        "https://www2.arccorp.com/globalassets/destination-gateway/dg-icon-3.png",
      alt: "Competitive Advantages",
      copy: "Competitive Advantages",
    },
    {
      image:
        "https://www2.arccorp.com/globalassets/destination-gateway/dg-icon-4.png",
      alt: "Credibility with Stakeholders",
      copy: "Credibility with Stakeholders",
    },
  ],
};

export const ColorBackground = Template.bind({});
ColorBackground.args = {
  className: "bg-color-teal",
  bg: "",
  id: "product-icons",
  copy: "Testing Product Icons Copy",
  prodIcons: [
    {
      image:
        "https://www2.arccorp.com/globalassets/destination-gateway/dg-icon-1.png",
      alt: "Strategic Planning",
      copy: "Strategic Planning",
    },
    {
      image:
        "https://www2.arccorp.com/globalassets/destination-gateway/dg-icon-2.png",
      alt: "Foresight and Planning",
      copy: "Foresight and Planning",
    },
    {
      image:
        "https://www2.arccorp.com/globalassets/destination-gateway/dg-icon-3.png",
      alt: "Competitive Advantages",
      copy: "Competitive Advantages",
    },
    {
      image:
        "https://www2.arccorp.com/globalassets/destination-gateway/dg-icon-4.png",
      alt: "Credibility with Stakeholders",
      copy: "Credibility with Stakeholders",
    },
  ],
};
