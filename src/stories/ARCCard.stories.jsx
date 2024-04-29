import React from "react";

import ARCCard from "../components/ARCCard";
import "./main.scss";

export default {
  //Props here
  title: "Example/ARC Card",
  component: ARCCard,
  parameters: {
    layout: "padded",
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
    cardType: {
      description: "Type of card",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    url: {
      description: "URL for the Card",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    image: {
      description: "URL for the image",
      table: {
        type: {
          summary: "string",
        },
      },
    },
    title: {
      description: "Title on the Card",
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
    <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <ARCCard url={args.url}>
          <ARCCard.Body>
            <ARCCard.Title>{args.title}</ARCCard.Title>
          </ARCCard.Body>
        </ARCCard>
      </div>
    </div>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  id: "",
  className: "",
  url: "",
  title: "Test Title",
  cardType: "related"
};

//------  Image Card -------

const ImageCardTemplate = (args) => (
  <div className="full-width">
    <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <ARCCard url={args.url}>
          <ARCCard.Image image={args.image} />
          <div className="arc-card-image-bottom">
            <div className="arc-card-image-body">
              <ARCCard.Title>{args.title}</ARCCard.Title>
            </div>
          </div>
        </ARCCard>
      </div>
    </div>
  </div>
);

export const ImageCard = ImageCardTemplate.bind({});

ImageCard.args = {
  id: "",
  className: "",
  url: "https://www2.arccorp.com/articles-trends/the-latest/IWD2024-Inspiring-Inclusion-at-ARC/",
  image:
    "https://www2.arccorp.com/globalassets/homepage/redesign/latest/IWD2024-Inspiring-Inclusion-at-ARC.jpg",
  title: "IWD2024: Inspiring Inclusion at ARC",
};

//------  Reference Card -------

const RelatedCardTemplate = (args) => (
  <div className="full-width">
    <div className="row">
      <div className="col-xs-12 col-sm-6 col-md-4 col-lg-3">
        <ARCCard url={args.url}>
          <ARCCard.Body>
            <div className="arc-card-related-title">{args.title}</div>
            <div className="arc-card-related-desc">{args.desc}</div>
            <a href={args.url} className="arc-card-related-cta">
              {args.cta ? args.cta : "Learn More"}{" "}
              <i class="fas fa-chevron-right"></i>
            </a>
          </ARCCard.Body>
        </ARCCard>
      </div>
    </div>
  </div>
);

export const RelatedContent = RelatedCardTemplate.bind({});

RelatedContent.args = {
  id: "",
  className: "",
  url: "https://www2.arccorp.com/products-participation/distribution/arcdirectconnect/",
  title: "ARC Direct Connect",
  desc: "ARC gives industry stakeholders the freedom to implement distribution strategies that best suit their needs.",
};
