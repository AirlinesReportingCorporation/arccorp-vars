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

const Template = (args) => (
  <>
    <Stickynav
      className="bg-color-teal"
      title="Product Name"
      links={[{ title: "Overview", url: "#overview" }]}
    />{" "}
    <ProductJumbo
      title="Looking for a more custom data solution?"
      backgroundImage="https://www2.arccorp.com/globalassets/destination-gateway/dg-jumbo.png"
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
      subTitleClass="a"
      subtitle={
        "Destination Gateway offers a powerful combination of airline ticketing, web search, airline schedules and capacity data to help drive long-term results for your community’s support and economic growth."
      }
      eyebrow={"Overview"}
    />
    <ProductQuote
      author="Simon Brooks"
      title="Senior Vice President, Sales for North America"
      backgroundImage="https://www2.arccorp.com/globalassets/products--participation/direct-connect/arc-dc-quote.png"
      className=""
      company="British Airways"
      id="quote"
      quote="British Airways is excited to be the first test partner for ARC's enhanced settlement functionality, which enables us to evolve our distribution strategy with  the travel agency channel. ARC has always been a trusted partner to British Airways, and we have valued  their flexibility, responsiveness and collaboration  during this testing process. These enhancements  will aid us in developing our relationships with  agencies, and they set the stage for our growing  distribution stratetgy in the U.S."
    />
    <ProductText
      id="partnership"
      className="bg-color-fog lightgray partnership"
      title={
        <span>
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
   <div style={{marginBottom: "90px"}}>
   <ProductCallout
    
    title="Looking for a more custom data solution?"
    subtitle="ARC's timely, concise and accurate data solutions contain actionable insights tailored to your organization's unique business needs. With a staff of analysts, statisticians and data scientists, ARC's team will consult with you on available report solutions, including format, frequency, depth and breadth of data."
    cta="Learn More"
    ctaLink="https://www2.arccorp.com"
  />
   </div>
    <div className="bg-color-fog">
      <ProductLinks
        colClass="col-lg-4"
        prodLink={[
          {
            alt: "Direct Connect Production Sheet",
            cta: "Download",
            header: (
              <>
                Direct Connect <br />
                Product Sheet
              </>
            ),
            icon: "https://www2.arccorp.com/globalassets/products--participation/direct-connect/ndc-icon-1.png",
            link: "https://www2.arccorp.com/globalassets/datasheets/DirectConnectwithNDC.pdf",
            direction: "down",
          },
          {
            alt: "Access ARC's NDC Media Library",
            header: (
              <>
                Access ARC’s <br />
                NDC Recordings
              </>
            ),
            cta: "Start Exploring",
            icon: "https://www2.arccorp.com/globalassets/homepage/redesign/ndc/ndc-icon-2.png",
            link: "https://www.youtube.com/playlist?list=PLf5REmQDokOmWX9wwbsFMTUDAwP5ih8LU",
          },
          {
            alt: "FAQs",
            cta: "Learn More",
            header: (
              <>
                FAQs
                <br />
                <br />
              </>
            ),
            icon: "https://www2.arccorp.com/globalassets/homepage/redesign/ndc/ndc-icon-3.png",
            link: "https://www2.arccorp.com/products-participation/distribution/arcdirectconnect/ndc-faqs/",
          },
        ]}
      />
    </div>
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
