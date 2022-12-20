import { useState } from 'react'
import quotes from './quotes.json'
import './App.css'

function App() {

  const random = Math.floor(Math.random() * quotes.length);

  const [index, setIndex] = useState(random)

  const changeQuote = () => {
    setIndex(Math.floor(Math.random() * quotes.length));
  }


  const colors = [
    "#845EC2", "#D65DB1", "#D65DB2", "#FF6F91", "#FF9671", "#FFC75F", "#F9F871",
    '#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
  ];

  const randomImg = [
    "url('https://img.freepik.com/vector-gratis/fondo-abstracto-blanco_23-2148810113.jpg?w=740&t=st=1671485327~exp=1671485927~hmac=56e491eca61b242d4623531a61c9c2dc0756157e6135db6368f2875dd78feef0",
    "url('https://img.freepik.com/vector-gratis/diseno-fondo-abstracto-blanco_23-2148825582.jpg?w=740&t=st=1671485317~exp=1671485917~hmac=5e180053164389d0904bb81981783dd3ea359b0d66aacd0ea3507a3111e0f1e8",
  ]

  const size = ["10px", "20px", "30px"
  ];

  const shuffleColor = Math.floor(Math.random() * colors.length);
  const shuffleImg = Math.floor(Math.random() * randomImg.length);
  const shuffleSize = Math.floor(Math.random() * randomImg.length);
  document.body.style = `background: ${colors[shuffleColor]}`;

  const letters = [
    "Roboto",
    "Inter",
    "Chivo Mono",
    "Montserrat",
    "Poppins",
    "Roboto",
    "Sono"
  ]



  const shuffleLetter = Math.floor(Math.random() * letters.length);

  const quote = quotes[random].quote
  const author = quotes[random].author
  console.log(quote);

  return (
    <div className="App">
      <div className='container' style={{ background: "white" }}>
        <h3 className='quote' style={{ color: colors[shuffleColor], fontFamily: letters[shuffleLetter] }} >"{quote}"</h3>
        <h4 className='author' style={{ color: colors[shuffleColor], fontFamily: letters[shuffleLetter] }}>"{author}"</h4>
        <button className='shufflebutton' onClick={changeQuote} style={{ background: colors[shuffleColor] }}><i className="fa-solid fa-shuffle"></i></button>
      </div>
    </div>
  )
}

export default App
