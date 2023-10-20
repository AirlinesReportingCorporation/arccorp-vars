import React from "react";

import ProductJumbo from "../components/ProductJumbo";
import "./main.scss";

/**Newer ARC style Jumbotron Component used on many product pages */
export default {
  title: "Example/ProductJumbo",
  component: ProductJumbo,
  argTypes: {
    className: {
      description: "Custom class option",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    width: {
      description: "Width of the title in the jumbo",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    backgroundImage: {
      description: "URL for the background image",
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
    subtitle: {
      description: "Subtitle Copy",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    ctaTitle: {
      description: "Call to Action Copy",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    ctaLink: {
      description: "Call to Action Link",
      table: {
        type: {
          summary: "string",
        },
      },
    },
  },
};

const Template = (args) => (
  <div className="full-width">
    <ProductJumbo {...args} />
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  className: "",
  width: "",
  backgroundImage:
    "https://www2.arccorp.com/globalassets/destination-gateway/dg-jumbo.png",
  title: "Looking for a more custom data solution?",
  subtitle: (
    <>
      <span>
        You are selling more than a location; you are creating an experience.
      </span>{" "}
      Appeal to more visitors by incorporating travel data insights into your
      destination management and marketing strategies.
    </>
  ),
  ctaTitle: "Learn More",
  ctaLink: "https://arccorp.com/",
};
