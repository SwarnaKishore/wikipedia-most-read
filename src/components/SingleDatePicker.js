import React from 'react';
import { MuiPickersUtilsProvider, KeyboardDatePicker } from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import Grid from '@material-ui/core/Grid';

const singleDatePicker = (props) => {
    return (
      <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <Grid container justify="space-around">
            <KeyboardDatePicker
              disableToolbar
              autoOk={true}
              disableFuture={true}
              variant="inline"
              format="MM/dd/yyyy"
              margin="normal"
              id="date-picker-inline"
              label="Select Date"
              value= {props.value}
              onChange={props.change}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
            />
          </Grid>
      </MuiPickersUtilsProvider>
    )
  }

  export default singleDatePicker;