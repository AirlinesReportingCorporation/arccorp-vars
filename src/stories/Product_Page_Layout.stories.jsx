import React from "react";

import Stickynav from "../components/Stickynav";
import ProductText from "../components/ProductText";
import ProductJumbo from "../components/ProductJumbo";
import ProductQuote from "../components/ProductQuote";
import ProductCallout from "../components/ProductCallout";
import ProductLinks from "../components/ProductLinks";
import "./main.scss";

export default {
  title: "Layouts/Product Pages",
  //component: ProductJumbo,
};

const Template = () => (
  <>
    <Stickynav title="ARC Travel Demand" />{" "}
    <ProductJumbo
      backgroundImage="https://www2.arccorp.com/globalassets/destination-gateway/dg-jumbo.png"
      className=""
      ctaLink="https://arccorp.com/"
      ctaTitle="Learn More"
      subtitle={
        <>
          <span>
            You are selling more than a location; you are creating an
            experience.
          </span>{" "}
          Appeal to more visitors by incorporating travel data insights into
          your destination management and marketing strategies.
        </>
      }
      title="Looking for a more custom data solution?"
      width=""
    />
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
    <ProductQuote
      author="Miles Mercera"
      backgroundImage="https://www2.arccorp.com/globalassets/destination-gateway/dg-bg-2.png"
      className=""
      company="Tourism Corporation Bonaire"
      id=""
      quote="I am often confronted with questions such as, ‘How’s the season picking up?’, ‘How are we ranked vs. other competitors?’,or ‘What’s our air service capacity like for the summer?’. I can now confidently showcase our direction and performance based on real-time data monitored and shared via ARC and ForwardKeys."
      title="CEO"
    />
    <ProductLinks
      valignClass="align-items-start"
      className=""
      colClass="col-lg-4"
      id=""
      prodLink={[
        {
          alt: "Travel Agency Payment Best Practices",
          copy: "A concise guide with advice, best practices and practical examples for travel payment professionals.",
          cta: "Download",
          direction: "down",
          header: "Travel Agency Payment Best Practices",
          icon: "https://www2.arccorp.com/globalassets/products--participation/arc-pay/person-chart-icon.png",
          link: "https://www2.arccorp.com/support-training/travel-agency-payment-best-practices/",
        },
        {
          alt: "Chargebacks Best Practices",
          copy: "A set of best practices to help travel agencies reduce and mitigate chargebacks.",
          cta: "Learn More",
          header: "Chargebacks Best Practices",
          icon: "https://www2.arccorp.com/globalassets/products--participation/arc-pay/money-report-icon.png",
        },
        {
          alt: "Fraud Prevention Practices",
          copy: "ARC provides advice, education and tools to help recognize and reduce fraud and mitigate risk.",
          cta: "Learn More",
          header: "Fraud Prevention Practices",
          icon: "https://www2.arccorp.com/globalassets/products--participation/arc-pay/security-icon.png",
          link: "https://www2.arccorp.com/support-training/fraud-prevention",
        },
      ]}
    />
    <ProductCallout
      className=""
      cta="Learn More"
      ctaLink="https://arccorp.com/"
      subtitle="ARC's timely, concise and accurate data solutions contain actionable insights tailored to your organization's unique business needs. With a staff of analysts, statisticians and data scientists, ARC's team will consult with you on available report solutions, including format, frequency, depth and breadth of data."
      title="Looking for a more custom data solution?"
    />
  </>
);

export const Primary = Template.bind({});

Primary.args = {
  className: "",
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
  cta: "Learn More",
  ctaLink: "https://arccorp.com/",
};
