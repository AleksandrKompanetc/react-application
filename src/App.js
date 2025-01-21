import React, { useState } from 'react';
import Header from './components/Header/Header';
import './App.css';
import TeachingSection from './components/TeachingSection';
import DifferencesSection from './components/DifferencesSection';
import IntroSection from './components/IntroSection';
import TabsSection from './components/TabsSection';
import FeedbackSection from './components/FeedbackSection';
import EffectSection from './components/EffectSection';

export default function App() {
  // if (contentType) {
  //   tabContent = <p>{differences[contentType]}</p>
  // } else {
  //   tabContent = <p>Press button</p>
  // }
  const [tab, setTab] = useState('effect');

  return (
    <>
      <Header />
      <hr />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && (<>
          <TeachingSection />
          <DifferencesSection />
        </>)}

        {tab === 'feedback' && <FeedbackSection />}

        {tab === 'effect' && <EffectSection />}
      </main>
    </>
  )
}
