import React from "react";

import IconCard from "../components/IconCard";
import "./main.scss";
import "../scss/products.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
/** There are 3 ways you can use an IconCard component. Primary (with an image background), Color backgound, and Component (No background). */
/** The type of component determines how you use it. For example, adding 'type: "component"' indicates it will not have a background, 'type: "section"' allows use of Primary or Color variations. You can get code from the story section below or go to the individual stories to test out any changes.*/
export default {
  title: "Example/IconCard",
  component: IconCard,
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
    type: {
      description: "options: section or component",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    bg: {
      description: "background image link",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    id: {
      description: "custom id / anchor",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    copy: {
      description: "The copy you want to be displayed",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    prodIcons: {
      description: "An array of icon objects you want to display and their copy",
      table: {
        type: {
          summary: "array",
        },
      },
    },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <IconCard {...args} />;
/** The Primary function of the IconCard is used on an image background */
export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  className: "",
  type: "section",
  bg: "https://www2.arccorp.com/globalassets/destination-gateway/dg-bg-2.png",
  id: "arc-icon-card",
  copy: "Testing ARC's Icon Cards",
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

/** The Color Background function of the IconCard is used on an colored background */
export const ColorBackground = Template.bind({});
ColorBackground.args = {
  className: "bg-color-teal",
  type: "section",
  bg: "",
  id: "arc-icon-card",
  copy: "Testing ARC's Icon Cards",
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

/** The Component function of the IconCard is used without any background */
export const Component = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Component.args = {
  colClass:"col-lg-12",
  position: 'center',
  bg: "https://www2.arccorp.com/globalassets/destination-gateway/dg-bg-2.png",
  id: "arc-icon-card",
  type: "component",
  copy: "Testing ARC's Icon Cards",
  iconCards: [
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
