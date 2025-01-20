import React from 'react';
import Header from './components/Header';
import './App.css';
import TeachingSection from './components/TeachingSection';
import DifferencesSection from './components/DifferencesSection';
import IntroSection from './components/IntroSection';

export default function App() {

  // if (contentType) {
  //   tabContent = <p>{differences[contentType]}</p>
  // } else {
  //   tabContent = <p>Press button</p>
  // }

  return (
    <>
      <Header />
      <hr />
      <main>
        <IntroSection />
        <TeachingSection />
        <DifferencesSection />
      </main>
    </>
  )
}
