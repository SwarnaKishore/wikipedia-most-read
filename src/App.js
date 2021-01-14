import './App.css';
import React, {Component } from 'react';
import MostReadArticleCard from './MostReadArticleCard';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Link from '@material-ui/core/Link';
import CircularProgress from '@material-ui/core/CircularProgress';
import { FcWikipedia } from 'react-icons/fc';

class App extends Component {
    state = {
      mostReadArticles: [],
      selectedDateForArticles: new Date(new Date().setDate(new Date().getDate() - 1))
    }

  handleDateChange = (date) => {
    this.setState({
      selectedDateForArticles: new Date(date)
    });
    // console.log('handleDateChange', this.state.selectedDateForArticles, date, 'date');
    this.getMostReadArticles(date);
  };

  componentDidMount() {
    this.getMostReadArticles(this.state.selectedDateForArticles);
  }

  getRequestURL = (date) => {
    date = new Date(date);
    date.setDate(date.getDate() + 1);
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
      })
    // console.log(this.state.mostReadArticles, 'articles');
    });
  }

  render() {
    const {mostReadArticles} = this.state;
    const {selectedDateForArticles} = this.state;
    console.log(selectedDateForArticles, mostReadArticles, 'render');
    const DatePicker = () => {
      return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
              <KeyboardDatePicker
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Pick Date"
                value={selectedDateForArticles}
                onChange={this.handleDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </Grid>
        </MuiPickersUtilsProvider>
      )
    }
    return (
      <React.Fragment>
        <AppBar position="relative" className="App-bar" >
          <Toolbar>
          <FcWikipedia className="Wiki-icon"/>
            <Typography variant="h6" color="inherit" noWrap>
             Wikipedia Most Read
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg">
          <Container maxWidth="sm">
              <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom className="App-header"> 
                  Wikipedia Most Read
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Check out Most Read Wikipedia articles for a selected date below.
              </Typography>
              <DatePicker />
          </Container>

          { mostReadArticles && mostReadArticles.length === 0 ?  <CircularProgress /> : '' }
          <Grid container justify="center" spacing={10} className="Articles-container">
            {mostReadArticles.map((entry, index) => (
            <Grid key={index} item>
              <MostReadArticleCard article={entry}/>
            </Grid>
          ))}
          </Grid>
        </Container>

        {(() => {
              if (mostReadArticles.length > 0) {
                return (
                  <footer>
                      <Typography variant="body2" color="textSecondary" align="center" className="FooterStyle">
                        {'Copyright © '}
                        <Link color="inherit" href="https://swarnakishore.github.io/wikipedia-most-read/">
                          Wikipedia Most Read
                        </Link>{' '}
                        {new Date().getFullYear()}
                        {'.'}
                      </Typography>
                  </footer>
                )
              }
        })()}
      </React.Fragment>
    );
  }
}

export default App;
