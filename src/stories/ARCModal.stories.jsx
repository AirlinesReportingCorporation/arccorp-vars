import React, { useState } from "react";

import ARCModal from "../components/ARCModal";
import "./main.scss";

export default {
  title: "Example/ARC Modal",
  component: ARCModal,
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
    open: {
      description: "State for opening the modal",
      table: {
        type: {
          summary: "boolean",
        },
      },
    },
  },
};

const Template = (args) => (
  <div className="full-width">
    <div className="row">
      <div className="col-lg-12">
        <ARCModal {...args}>
          <p>test copy</p>
        </ARCModal>
      </div>
    </div>
  </div>
);

export const Primary = Template.bind({});

Primary.args = {
  id: "test",
  className: "test-modal",
  open: false,
};
