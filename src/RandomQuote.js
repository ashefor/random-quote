import React, { Component } from 'react';

class RandomQuote extends Component {
    render() {
        const displayColor = this.props.displayColor()
        const { randomQuote, quote, author } = this.props;
        // const html = document.documentElement;
        // html.style.backgroundColor = displayColor;
        return (
          <div className="quoteContainer" style={{ backgroundColor: displayColor }} >
              <h2 style={{color: "white", textAlign: 'center'}}>Get Random Quotes from really smart dead people</h2>
                <div className="test">
                <div style={{ backgroundColor: "white" }} className="quotebox">
                <div className="fadeIn" style={{ color: displayColor }}>
                    <h1 id="quote">"{quote}"</h1>
                    <h5 id="author">
                        -{author ? author : "Unknown"}-
                        </h5>
                </div>
                <button style={{ backgroundColor: displayColor }} id="newquote" onClick={randomQuote}>
                    New quote
                    </button>
            </div>
                </div>
          </div>
        )
    }
}

export default RandomQuote