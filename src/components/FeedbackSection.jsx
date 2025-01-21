import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState('');
  const [hasError, setHasError] = useState(true);
  const [reason, setReason] = useState('help');

  function handleNameChange(event) {
    setName(event.target.value)
    setHasError(event.target.value.trim() === 0)
  }

  function toggleError() {
    setHasError((prev) => !prev)
    // setHasError(!hasError)
  }

  return (
    <section>
      <h3>Feedback</h3>

      <Button onClick={toggleError}>Toggle Error</Button>

      <form>
        <label htmlFor="name">Your Name</label>
        <input 
          type="text"  
          id="name" 
          className="control" 
          value={name} 
          style={{
            border: hasError ? '1px solid red' : null,
          }}
          onChange={handleNameChange} 
        />

        <label htmlFor="reason">Reason for contact</label>
        <select id="reason" className="control" value={reason} onChange={(e) => setReason(e.target.value)}>
          <option value="error">Error</option>
          <option value="help">Need help</option>
          <option value="suggest">Suggest</option>
        </select>

        <pre>
          Name: {name}
          <br />
          Reason: {reason}
        </pre>

        <Button disabled={hasError} isActive={!hasError} className='button'>Send</Button>
      </form>
    </section>
  )
}