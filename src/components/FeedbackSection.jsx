import { useState } from "react";
import Button from "./Button/Button";

export default function FeedbackSection() {
  const [name, setName] = useState('');
  const [reason, setReason] = useState(help);

  return (
    <section>
      <h3>Feedback</h3>

      <form>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" className="control" />

        <label htmlFor="reason">Reason for contact</label>
        <select id="reason" className="control">
          <option value="error">Error</option>
          <option value="help">Need help</option>
          <option value="suggest">Offer</option>
        </select>

        <Button>Send</Button>
      </form>
    </section>
  )
}