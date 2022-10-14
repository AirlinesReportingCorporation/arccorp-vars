import React from "react";

import ProductQuote from "../components/ProductQuote";
import "./main.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ProductQuote",
  component: ProductQuote,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ProductQuote {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  id: "",
  className: "",
  backgroundImage:
    "https://www2.arccorp.com/globalassets/destination-gateway/dg-bg-2.png",
  quote:
    "I am often confronted with questions such as, ‘How’s the season picking up?’, ‘How are we ranked vs. other competitors?’,or ‘What’s our air service capacity like for the summer?’. I can now confidently showcase our direction and performance based on real-time data monitored and shared via ARC and ForwardKeys.",
  author: "Miles Mercera",
  title: "CEO",
  company: "Tourism Corporation Bonaire",
};

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
  id: "",
  className: "bg-color-teal",
  backgroundImage: "",
  quote:
    "I am often confronted with questions such as, ‘How’s the season picking up?’, ‘How are we ranked vs. other competitors?’,or ‘What’s our air service capacity like for the summer?’. I can now confidently showcase our direction and performance based on real-time data monitored and shared via ARC and ForwardKeys.",
  author: "Miles Mercera",
  title: "CEO",
  company: "Tourism Corporation Bonaire",
};
