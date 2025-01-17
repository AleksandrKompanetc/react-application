import React, {useState} from 'react';
import './App.css';

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
      <header>
        <h3>Result</h3>
        <span>There will be time here!</span>
      </header>
      <hr />
      <h1>Hello React!</h1>
    </div>
  )
}
