import React, { useState } from "react";

export default function Header() {
  const [now, setNow] = useState(new Date());
  
  setInterval(() => setNow(new Date()), 1000);
  return (
    <header>
      <h3>Result</h3>
      <span>Time now: {now.toLocaleTimeString()}</span>
    </header>
  )
}