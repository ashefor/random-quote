import React, { Component } from 'react';
import quotes from './QuoteData'
import './App.css';
import RandomQuote from './RandomQuote'

class App extends Component {
  constructor() {
    super()
    const randomNumber = Math.floor(Math.random() * quotes.length);
      this.state = {
      quote: quotes[randomNumber].quote,
      author: quotes[randomNumber].author
    }
  }

  getRandomQuote() {
    const randomNumber = Math.floor(Math.random() * quotes.length);
    return quotes[randomNumber]
  }

  shuffleQuotes(quotes) {
    return quotes.sort(() => Math.random() - 0.5)
  }

  randomQuoteClickHandler = () =>{
    const generatedRandomQuote = this.getRandomQuote();
    this.setState({
      quote: generatedRandomQuote.quote,
      author: generatedRandomQuote.author
    })
    // this.shuffleQuotes(quotes)
  }

  getRandomColor() {
    const randomColor = `rgb(
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)},
      ${Math.floor(Math.random() * 155)}
    )`
    return randomColor
  }
  render() {
    return (
      <div className="App">
        <RandomQuote displayColor={this.getRandomColor} randomQuote={this.randomQuoteClickHandler} {...this.state}/>
      </div>
    );
  }
}

export default App;
