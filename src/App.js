import "./App.css"
import Quotes from './quotes.json'
import React, { useState } from "react"
import { colorHEX } from "./Methods"
import { randomNumber } from "./Methods"
import Buttom from "./Components/Buttom"
import { FaTwitter } from 'react-icons/fa'
import { FaQuoteLeft } from 'react-icons/fa'

function App() {
  let quotes = Quotes.quotes
  let indexQuotes = quotes.length
  let quoteAleatory = randomNumber(indexQuotes)

  const [q, setQ] = useState(quotes[quoteAleatory].quote)
  const [color, setColor] = useState(colorHEX())

  const HandleQuote = () => {
    let qNew = randomNumber(indexQuotes)
    setQ(quotes[qNew].quote)
    setColor(colorHEX())
  }
console.log(colorHEX())
 document.getElementById("root").style.backgroundColor = color

  return (

    <div className="container">
      <div className="card" style={{backgroundColor: 'white'}}>
        <div className="card-body">
          <h2 className="quotes"><FaQuoteLeft style={{ margin: "10px" }} />{q}</h2>

          <div className="Author">

            <p>-- {quotes[quoteAleatory].author}</p>
          </div>

          <div className="father">

            <div>
              <a style={{ backgroundColor: '' + color + '' }} className="twitterfa" href="www.google.com" target="_blank"><FaTwitter /></a>
            </div>

            <div className="buttom">
              <Buttom Aleatory={HandleQuote} color={color} />
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
