import './App.css';
import React, {Component } from 'react';
import MostReadArticleCard from './MostReadArticleCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

class App extends Component {
  state = {
    mostReadArticles: [],
    selectedDateForArticles: new Date(),
  }

  handleDateChange = (date) => {
    this.setState({
      selectedDateForArticles: new Date(date)
    });
  };
  
  componentDidMount() {
    this.getMostReadArticles(this.state.selectedDateForArticles);
  }

  getRequestURL = (date) => {
    let month = (date.getMonth() + 1).toString().length === 1 ? ('0' + (date.getMonth() + 1)) : (date.getMonth() + 1);
    let day = (date.getDate()).toString().length === 1 ? ('0' + date.getDate()) : date.getDate();
    return 'https://en.wikipedia.org/api/rest_v1/feed/featured/' + date.getFullYear() + '/' + month + '/' + day;
  }

  getMostReadArticles = (date) => {
    const url = this.getRequestURL(date);
  fetch(url)
    .then((result) => result.json())
    .then((result) => {
      this.setState({
        mostReadArticles: result.mostread.articles,
        selectedDateForArticles: new Date(result.mostread.date)
      })
    });
  }

  render() {
    const {mostReadArticles} = this.state;
    return (
      <React.Fragment>
        <AppBar position="relative" className="App-bar" >
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Wikipedia Most Read
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="lg">
          <Grid container justify="center" spacing={10}>
            {mostReadArticles.map((entry, index) => (
            <Grid key={index} item>
              <MostReadArticleCard article={entry}/>
            </Grid>
          ))}
          </Grid>
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
