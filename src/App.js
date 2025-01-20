import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import { ways, differences } from './data';
import WayToTeach from './components/WayToTeach';
import Button from './components/Button/Button';
import TeachingSection from './components/TeachingSection';

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
        <section>
          <h3>Чем мы отличаемся от других?</h3>
          <Button 
            isActive={contentType === 'way'} 
            onClick={() => handleClick('way')}
          >
            Подход
          </Button>
          <Button 
            isActive={contentType === 'easy'} 
            onClick={() => handleClick('easy')}
          >
            Доступность
          </Button>
          <Button 
            isActive={contentType === 'program'} 
            onClick={() => handleClick('program')}
          >
            Концентрация
          </Button>

          {/* {contentType ? <p>{differences[contentType]}</p> : <p>Press button</p>} */}

          {!contentType && <p>Press button</p>}
          {contentType && <p>{differences[contentType]}</p>}

          {tabContent}

        </section>
      </main>
    </div>
  )
}
