import React, { useState } from 'react';
import Header from './components/Header';
import './App.css';
import {ways} from './data';
import WayToTeach from './components/WayToTeach';

// const content = [
//   {title: 'HTML', text: 'Learn HTML and will be nice!'},
//   {title: 'CSS', text: 'Learn CSS and will be nice!'},
//   {title: 'JavaScript', text: 'Learn JavaScript and shall be know FrontEnd!'}
// ]

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
          {/* <ul>
            {ways.map((way) => <WayToTeach title={way.title} description={way.description} />)}
          </ul> */}
          <ul>
            <WayToTeach title={ways[0].title} description={ways[0].description} />
            <WayToTeach {...ways[1]} />
            <WayToTeach {...ways[2]} />
            <WayToTeach {...ways[3]} />
          </ul>
        </section>
      </main>
    </div>
  )
}
