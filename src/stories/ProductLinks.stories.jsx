import React from "react";

import ProductLinks from "../components/ProductLinks";
import "./main.scss";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "Example/ProductLinks",
  component: ProductLinks,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  // argTypes: {
  //   backgroundColor: { control: "color" },
  // },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <ProductLinks {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
  colClass: "col-lg-4",
  prodLink: [
    {
      icon: "https://www2.arccorp.com/globalassets/products--participation/arc-pay/person-chart-icon.png",
      alt: "Travel Agency Payment Best Practices",
      header: "Travel Agency Payment Best Practices",
      copy: "A concise guide with advice, best practices and practical examples for travel payment professionals.",
      link: "https://www2.arccorp.com/support-training/travel-agency-payment-best-practices/",
      cta: "Download",
      direction: "down"
    },
    {
      icon: "https://www2.arccorp.com/globalassets/products--participation/arc-pay/money-report-icon.png",
      alt: "Chargebacks Best Practices",
      header: "Chargebacks Best Practices",
      copy: "A set of best practices to help travel agencies reduce and mitigate chargebacks.",
    },
    {
      icon: "https://www2.arccorp.com/globalassets/products--participation/arc-pay/security-icon.png",
      alt: "Fraud Prevention Practices",
      header: "Fraud Prevention Practices",
      copy: "ARC provides advice, education and tools to help recognize and reduce fraud and mitigate risk.",
      link: "https://www2.arccorp.com/support-training/fraud-prevention",
      cta: "Learn More",
    },
  ],
};
