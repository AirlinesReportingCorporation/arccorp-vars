import React, { useEffect, useState } from "react";

import Modal from "react-modal";

export default function ARCModal(props) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Modal
      id={props.id}
      className={props.className ? "arc-modal " + props.className : "arc-modal"}
      isOpen={props.open}
      onRequestClose={closeModal}
      contentLabel="Example Modal"
      style={props.style}
    >
      <div onClick={closeModal} className="modal-close text-right">
        <i class="fa fa-times" aria-hidden="true"></i>
      </div>
      <div className="arc-modal-body">{props.children}</div>
    </Modal>
  );
}
