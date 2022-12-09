import React from "react";

import ProductBoxes from "../components/ProductBoxes";
import "./main.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: "Example/ProductBoxes",
    component: ProductBoxes,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    // argTypes: {
    //   backgroundColor: { control: "color" },
    // },
  };
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template = (args) => (
    <div className="full-width">
      <ProductBoxes {...args} />
    </div>
  );
  
  export const Primary = Template.bind({});
  // More on args: https://storybook.js.org/docs/react/writing-stories/args
  Primary.args = 
    [
        {number: "1", text: "Review", label: "Application & Manual", links: [{url: "/globalassets/ndc/direct-connect-program-application_v8.pdf", cta: "Application"}, {url: "/globalassets/ndc/Direct-Connect-Program-Manual.pdf", cta: "Manual"}]},
        {number: "2", text: "Initiate", label: "Discovery Call with ARC", links: [{url: "mailto:NDC@arccorp.com", cta: "Schedule"}]},
        {number: "3", text: "Determine", label: "Transaction Business Rules", links: ""},
    ]
  ;