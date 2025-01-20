import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import { ways, differences } from './data';
import WayToTeach from './components/WayToTeach';
import Button from './components/Button/Button';

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
        <section>
          <h3>Our education</h3>
          <ul>
            <WayToTeach title={ways[0].title} description={ways[0].description} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
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
