import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [form, setForm] = useState({
    name: '',
    hasError: false,
    reason: 'help',
  });
  // const [name, setName] = useState('');
  // const [hasError, setHasError] = useState(true);
  // const [reason, setReason] = useState('help');

  function handleNameChange(event) {
    setForm((prev) => ({
      ...prev,
      name: event.target.value,
      hasError: event.target.value.trim().length === 0,
    }))
    // setForm({
    //   name: event.target.value,
    //   hasError: event.target.value.trim().length === 0,
    //   reason: form.reason,
    // })
    
    // setName(event.target.value)
    // setHasError(event.target.value.trim().length === 0)
  }

  function toggleError() {
    // setHasError((prev) => !prev)
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
          value={form.name} 
          style={{
            border: form.hasError ? '1px solid red' : null,
          }}
          onChange={handleNameChange} 
        />

        <label htmlFor="reason">Reason for contact</label>
        <select id="reason" className="control" value={form.reason} onChange={(event) => setForm(prev => ({...prev, reason: event.target.value}))}>
          <option value="error">Error</option>
          <option value="help">Need help</option>
          <option value="suggest">Suggest</option>
        </select>

        <pre>
          Name: {form.name}
          <br />
          Reason: {form.reason}
        </pre>

        <Button disabled={form.hasError} isActive={!form.hasError} className='button'>Send</Button>
      </form>
    </section>
  )
}