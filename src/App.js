import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import { ways, differences } from './data';
import WayToTeach from './components/WayToTeach';
import Button from './components/Button/Button';
import TeachingSection from './components/TeachingSection';
import DifferencesSection from './components/DifferencesSection';

export default function App() {
  const [contentType, setContentType] = useState(null);

  function handleClick(type) {
    setContentType(type)
  }

  let tabContent = null;

  // if (contentType) {
  //   tabContent = <p>{differences[contentType]}</p>
  // } else {
  //   tabContent = <p>Press button</p>
  // }

  return (
    <div>
      <Header />
      <hr />
      <main>
        <TeachingSection />
        <DifferencesSection />
      </main>
    </div>
  )
}
