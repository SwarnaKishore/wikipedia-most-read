import './App.css';
import React, {Component } from 'react';
import MostReadArticleCard from './MostReadArticleCard';

class App extends Component {
  state = {
    mostReadArticles: [],
    resultsDate: new Date(),
  }
  componentDidMount() {
    const url =
      'https://en.wikipedia.org/api/rest_v1/feed/featured/2020/12/31'

    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          mostReadArticles: result.mostread.articles,
          resultsDate: new Date(result.mostread.date)
        })
      })
  }

  render() {
    const {mostReadArticles} = this.state;
    const result = mostReadArticles.map((entry, index) => {
      return <MostReadArticleCard article={entry} key={index}/>;
    });
    return <div>{result}</div>;
  }
}

export default App;
