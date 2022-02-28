import './App.css';
import quotes from './quotes.json'; 
import {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShuffle } from "@fortawesome/free-solid-svg-icons";

function App() {
  
  const getRandom = () => Math.floor(Math.random() * quotes.length);

const colors = [
  "#A9CCE3",
  "#612225",
  "#CC1219",
  "#64CC12",
  "#1219CC",
  "#D43B63"
];


  const [quote, setQuote] = useState(quotes[getRandom()]);

  const changeQuote = () => {
    const random = getRandom();
    setQuote(quotes[random]);
  };

  const color = colors[Math.floor(Math.random() * 6)];

  document.body.style = `background: ${color}`;

  return (
  <div className='App'>
    <div className="tarjeta" style={{ color: color }}>
      <h1>
        "{quote.quote}"
      </h1>
      <ul>
        <li>
          <i className="fa-solid fa-location-dot"></i>
            "{quote.author}"
        </li>
      </ul>
      <button onClick={changeQuote}>
        <FontAwesomeIcon icon={faShuffle}/>
      </button>
    </div>
  </div>  
  );
}

export default App;
