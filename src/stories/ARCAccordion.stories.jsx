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
      control: "boolean",
    },
  },
};

const Template = (args) => (
  <div className="full-width">
    <div className="row">
      <ARCAccordion {...args} />
    </div>
  </div>
);

export const Primary = Template.bind({});

export const Grouped = () => {
  const groupedAccrodion = Array("list of accordions", [
    {
      name: "I am an Accordion",
      body: "Hello!",
      showing: false,
    },
    {
      name: "I am an Accordion 1",
      body: "Hello!",
      showing: false,
    },
    {
      name: "I am an Accordion 2",
      body: "Hello!",
      showing: false,
    },
  ]);

  return (
    <div className="full-width">
      <div className="row">
        {groupedAccrodion[1].map(function (accordion) {
          console.log(accordion);
          return <ARCAccordion {...accordion} />;
        })}
      </div>
    </div>
  );
};

Primary.args = {
  name: "I am an Accordion",
  body: "Hello!",
  showing: false,
};
