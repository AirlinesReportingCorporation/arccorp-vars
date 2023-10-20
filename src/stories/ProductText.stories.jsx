import React from "react";

import ProductText from "../components/ProductText";
import "./main.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
/** Commonly used to implement blocks for pages, allows the developer to customize a section of a page further by implementing custom code into body or outer body.  */
export default {
  title: "Example/ProductText",
  component: ProductText,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    className: {
      description: "Custom class option",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    id: {
      description: "Custom id/anchor option",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    eyebrow: {
      description: "Optional Eyebrow Copy",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    title: {
      description: "Title Copy",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    titleClass: {
      description: "optional class for the title",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    subTitleClass: {
      description: "optional class for the subtitle",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    subtitle:{
      description: "Subtitle Copy",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    body: {
      description: "Body component, this is where you can add further JSX to customize a body",
      table: {
        type: {
          summary: "JSX",
        },
      },
    },
    outerBody: {
      description: "Outer Body component, this is where you can add further JSX to customize a body that is not within the bouds of the parent",
      table: {
        type: {
          summary: "JSX",
        },
      },
    },
  },
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
  outerBody: "",
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
  outerBody: "",
};

export const BackgroundImage = Template.bind({});
BackgroundImage.args = {
  id: "#overview",
  backgroundImage:
    "https://www2.arccorp.com/globalassets/destination-gateway/dg-jumbo.png",
  eyebrow: "Overview",
  title: "Generate Demand for Your Destination",
  titleClass: "white",
  subTitleClass: "",
  subtitle:
    "Destination Gateway offers a powerful combination of airline ticketing, web search, airline schedules and capacity data to help drive long-term results for your community’s support and economic growth.",
  body: "",
  outerBody: "",
};
