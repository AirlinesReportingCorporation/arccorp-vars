import React from "react";

import ProductText from "../components/ProductText";
import "./main.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ProductText",
  component: ProductText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ProductText {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  id: "#overview",
  className: "",
  eyebrow: "Overview",
  title: "Generate Demand for Your Destination",
  titleClass: "",
  subTitleClass: "",
  subtitle:
    "Destination Gateway offers a powerful combination of airline ticketing, web search, airline schedules and capacity data to help drive long-term results for your community’s support and economic growth.",
  body: "",
};

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
  id: "#overview",
  className: "bg-color-tarmac",
  eyebrow: "Overview",
  title: "Generate Demand for Your Destination",
  titleClass: "white",
  subTitleClass: "",
  subtitle:
    "Destination Gateway offers a powerful combination of airline ticketing, web search, airline schedules and capacity data to help drive long-term results for your community’s support and economic growth.",
  body: "",
};
