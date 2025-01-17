import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';

// const content = [
//   {title: 'HTML', text: 'Learn HTML and will be nice!'},
//   {title: 'CSS', text: 'Learn CSS and will be nice!'},
//   {title: 'JavaScript', text: 'Learn JavaScript and shall be know FrontEnd!'}
// ]

function WayToTeach() {
  return (
    <li>
      <p>
        <strong>Фильтрация информации и технологий </strong>
        Из огромного количества информации и навыков в IT, вы получаете только то, что необходимо и работает.
      </p>
    </li>
  )
}

export default function App() {
  // const [active, setActive] = useState(null);
  return (
    // <ul>
    //   {content.map((item, index) => (
    //     <li 
    //       key={item.title}
    //       onClick={() => setActive(index)}
    //       className={index === active ? 'active' : null}
    //     >
    //       <h3>{item.title}</h3>
    //       <div className='content'>{item.text}</div>
    //     </li>
    //   ))}
    // </ul>
    <div>
      <Header />
      <hr />
      <main>
        <section>
          <h3>Our education</h3>
          <ul>
            <WayToTeach />
            <WayToTeach />
            <WayToTeach />
          </ul>
        </section>
      </main>
    </div>
  )
}
