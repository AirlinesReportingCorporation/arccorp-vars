import React, { useState } from "react";

import ARCAccordion from "../components/ARCAccordion";
import "./main.scss";

export default {
  title: "Example/ARC Accordion",
  component: ARCAccordion,
  parameters: {
    layout: "padded", // or `padded` by default
  },
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
      <div className="col-lg-12">
        <ARCAccordion {...args} />
      </div>
    </div>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  id: "",
  className: "",
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
            <div className="col-lg-12">
              <ARCAccordion
                name={accordion.name}
                body={accordion.body}
                showing={accordion.showing}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Grouped = groupedTemplate.bind({});

Grouped.args = {
  showing: false,
};
