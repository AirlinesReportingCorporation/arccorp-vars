import React from "react";

import ProductCallout from "../components/ProductCallout";
import "./main.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ProductCallout",
  component: ProductCallout,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <div className="full-width">
    <ProductCallout {...args} />
  </div>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Looking for a more custom data solution?",
  subtitle:
    "ARC's timely, concise and accurate data solutions contain actionable insights tailored to your organization's unique business needs. With a staff of analysts, statisticians and data scientists, ARC's team will consult with you on available report solutions, including format, frequency, depth and breadth of data.",
  cta: "Learn More",
  ctaLink: "https://arccorp.com/",
};
