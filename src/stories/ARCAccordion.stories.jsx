import React, { useState } from "react";

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

Primary.args = {
  name: "I am an Accordion",
  body: "Hello!",
  showing: false,
};

const groupedTemplate = (args) => {
  let groupedAccordion = [
    {
      name: "I am an Accordion",
      body: "Hello!",
      showing: args.showing,
    },
    {
      name: "I am an Accordion 1",
      body: "Hello!",
      showing: args.showing,
    },
    {
      name: "I am an Accordion 2",
      body: "Hello!",
      showing: args.showing,
    },
  ];

  return (
    <div className="full-width">
      <div className="row">
        {groupedAccordion.map(function (accordion) {
          return (
            <ARCAccordion
              name={accordion.name}
              body={accordion.body}
              showing={accordion.showing}
            />
          );
        })}
      </div>
    </div>
  );
};

export const Grouped = groupedTemplate.bind({});

Grouped.args = {
  showing: false
}
