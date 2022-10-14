import React from "react";

import Stickynav from "../components/Stickynav";
import ProductText from "../components/ProductText";
import "./main.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/Stickynav",
  component: Stickynav,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => (
  <>
    <Stickynav {...args} />{" "}
    <ProductText
      id="overview"
      className="bg-color-white overview"
      title={
        <>
          Generate Demand <br />
          for Your Destination
        </>
      }
      subtitle={
        "Destination Gateway offers a powerful combination of airline ticketing, web search, airline schedules and capacity data to help drive long-term results for your community’s support and economic growth."
      }
      eyebrow={"Overview"}
    />
    <ProductText
      id="partnership"
      className="bg-color-black lightgray partnership"
      title={
        <span className="type-color-white">
          International and Cross-
          <br />
          Functional Collaboration
        </span>
      }
      subTitleClass={"lightgray light-font"}
      subtitle={
        <>
          <span>ARC and ForwardKeys</span> have partnered to offer a customized
          data intelligence tool for destination marketing organizations,
          tourism boards, and convention and visitors' bureaus to help you
          understand travel to your destinations and competing destinations.
        </>
      }
      eyebrow={"Partnership"}
    />
    <ProductText
      id="howitworks"
      className="bg-color-black lightgray partnership"
      title={
        <span className="type-color-white">
          International and Cross-
          <br />
          Functional Collaboration
        </span>
      }
      subTitleClass={"lightgray light-font"}
      subtitle={
        <>
          <span>ARC and ForwardKeys</span> have partnered to offer a customized
          data intelligence tool for destination marketing organizations,
          tourism boards, and convention and visitors' bureaus to help you
          understand travel to your destinations and competing destinations.
        </>
      }
      eyebrow={"Partnership"}
    />
  </>
);

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  title: "Destination Gateway",
  links: [
    { title: "Overview", url: "#overview" },
    { title: "Partnership", url: "#partnership" },
    { title: "How It Works", url: "#howitworks" },
    { title: "Modules", url: "#modules" },
  ],
};
