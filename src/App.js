import './App.css';
import React, {Component } from 'react';
import MostReadArticleCard from './components/MostReadArticleCard';
import SingleDatePicker from './components/SingleDatePicker';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Alert, AlertTitle } from '@material-ui/lab';

class App extends Component {
    state = {
      mostReadArticles: [],
      selectedDateForArticles: new Date(new Date().setDate(new Date().getDate() - 1)),
      loading: true,
      noResultsReturned: '',
      alertMessage: ''
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
    this.setState({ loading: true });
    const url = this.getRequestURL(date);
    fetch(url)
      .then((result) => result.json())
      .then((result) => {
        this.setState({
          mostReadArticles: result && result.mostread && result.mostread.articles ? result.mostread.articles : [],
          loading: false,
          noResultsReturned: result && result.mostread && result.mostread.articles ? '' : 'No results returned',
          alertMessage: result && result.mostread && result.mostread.articles ? '' : 'Please make sure to select the previous dates excluding current and future dates for retrieving most read articles.'
        })
      // console.log(this.state.mostReadArticles, 'articles');
      });
  }

  render() {
    const {mostReadArticles} = this.state;
    const {selectedDateForArticles} = this.state;
    const {loading} = this.state;
    const {noResultsReturned} = this.state;
    const {alertMessage} = this.state;
 
    return (
      <React.Fragment>
        <Navbar />

        <Container maxWidth="lg">
          <Container maxWidth="sm">
              <Typography component="h3" variant="h3" align="center" color="textPrimary" gutterBottom className="App-header"> 
                  Wikipedia Most Read
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                  Most read wikipedia articles for a date.  
                   {/* <span>By default displaying the most read articles for yesterday.</span> */}
                </Typography>
              <SingleDatePicker value={selectedDateForArticles}
                                change={this.handleDateChange}
              />
          </Container>

          { mostReadArticles && mostReadArticles.length === 0 && loading === true ?  <CircularProgress /> : '' }

          <Grid container justify="center" spacing={10} className="Articles-container">

            { noResultsReturned && noResultsReturned.length > 0 && loading === false ?  
              <Alert severity="warning">
                <AlertTitle>{noResultsReturned}</AlertTitle>
                {alertMessage}
              </Alert>
            : '' }

            {mostReadArticles.map((entry, index) => (
            <Grid key={index} item>
              <MostReadArticleCard article={entry}/>
            </Grid>
          ))}
          </Grid>
        </Container>

        {(() => {
              if (mostReadArticles.length > 0 || noResultsReturned && noResultsReturned.length > 0) {
                return (
                 <Footer />
                )
              }
        })()}
      </React.Fragment>
    );
  }
}

export default App;
