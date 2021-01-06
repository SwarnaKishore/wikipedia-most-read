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
      <React.Fragment>
        <AppBar position="relative" className="App-bar" >
          <Toolbar>
            {/* <CameraIcon className={classes.icon} /> */}
            <Typography variant="h6" color="inherit" noWrap>
              Wikipedia Most Read
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md">
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
