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

class App extends Component {
  state = {
    mostReadArticles: [],
    selectedDateForArticles: new Date(),
  }

  handleDateChange = (date) => {
    this.setState({
      selectedDateForArticles: date
    });
    console.log('handleDateChange', this.state.selectedDateForArticles, date, 'date');
    this.getMostReadArticles(date);
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
      })
    console.log(this.state.mostReadArticles, 'articles');
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
                label="Date picker inline"
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
            <Typography variant="h6" color="inherit" noWrap>
              Wikipedia Most Read
            </Typography>
          </Toolbar>
        </AppBar>

        <Container maxWidth="lg">
        <DatePicker />
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
