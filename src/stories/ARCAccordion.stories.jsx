import React from "react";

import ARCAccordion from "../components/ArcAccordion";
import "./main.scss";

export default {
  title: "Example/ARC Accordion",
  component: ARCAccordion,
  argTypes: {
    name: {
      description: "Title for the Arccordion",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    body: {
      description: "inner area for the accordion",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    showing: {
      description: "if it is showing or not",
      control: 'boolean',
    },
  },
};

const Template = (args) => (
  <div className="full-width">
    <ARCAccordion {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  name: "I am an Accordion",
  body: "Hello!",
  showing: false,
};
