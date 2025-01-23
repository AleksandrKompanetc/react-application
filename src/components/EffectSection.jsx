import React, { useEffect, useState, useCallback } from "react";
import Modal from "./Modal/Modal";
import Button from "./Button/Button";
import useInput from "../hooks/useInput";

export default function EffectSection() {
  const input = useInput();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true)
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await response.json()
    setUsers(users)
    setLoading(false)
  }, [])

  useEffect(() => {
    fetchUsers()
  }, [fetchUsers])

  return (
    <section>
      <h3>Effects</h3>

      <Button style={{ marginBottom: '1rem' }} onClick={() => setModal(true)}>Open Info</Button>

      <Modal open={modal}>
        <h3>Hello from modal</h3>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facilis modi qui quam?
          Quibusdam veritatis nulla eligendi quo possimus autem consectetur veniam quis.
        </p>
        <Button onClick={() => setModal(false)}>Close</Button>
      </Modal>

      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          <input type="text" className="control" {...input} />
          <h6>{input.value}</h6>
          <ul>
            {users.map((user) => (
              <li key={user.id}>{user.name}</li>))}
          </ul>
        </>
      )}
    </section>
  )
}