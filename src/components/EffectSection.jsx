import React, { useEffect, useState } from "react";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";

export default function EffectSection() {
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  fetch('https://jsonplaceholder.typicode.com/users')

  async function fetchUsers() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const data = await response.json()
    
  }

  useEffect(() => {

  }, [])

  return (
    <section>
      <h3>Effects</h3>

      <Button onClick={() => setModal(true)}>Open Info</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis modi qui quam? 
          Quibusdam veritatis nulla eligendi quo possimus autem consectetur veniam quis.
        </p>
        <Button onClick={() => setModal(false)}>Close</Button>
      </Modal>
    </section>
  )
}