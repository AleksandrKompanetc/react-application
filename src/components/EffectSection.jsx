import React, { useState } from "react";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";

export default function EffectSection() {
  const [modal, setModal] = useState(false);

  function openModal() {
    setModal(true)
  }

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={openModal}>Open Info</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis modi qui quam? 
          Quibusdam veritatis nulla eligendi quo possimus autem consectetur veniam quis.</p>
      </Modal>
    </section>
  )
}