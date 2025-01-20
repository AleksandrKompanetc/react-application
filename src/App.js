import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import TeachingSection from './components/TeachingSection';
import DifferencesSection from './components/DifferencesSection';
import IntroSection from './components/IntroSection';
import TabsSection from './components/TabsSection';
import FeedbackSection from './components/FeedbackSection';

export default function App() {
  // if (contentType) {
  //   tabContent = <p>{differences[contentType]}</p>
  // } else {
  //   tabContent = <p>Press button</p>
  // }
  const [tab, setTab] = useState('feedback');

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
      </main>
    </>
  )
}
