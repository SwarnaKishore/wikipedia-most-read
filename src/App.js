import './App.css';
import React, {Component } from 'react';
import MostReadArticleCard from './MostReadArticleCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

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
    return (
      <Container maxWidth="md">
        <Grid container justify="center" spacing={10}>
          {mostReadArticles.map((entry, index) => (
          <Grid key={index} item>
            <MostReadArticleCard article={entry}/>
          </Grid>
        ))}
        </Grid>
      </Container>
    );
  }
}

export default App;
