import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { FcWikipedia } from 'react-icons/fc';
import Typography from '@material-ui/core/Typography';

const navbar = () => {
    return (
        <AppBar position="relative" className="App-bar" >
          <Toolbar>
          <FcWikipedia className="Wiki-icon"/>
            <Typography variant="h6" color="inherit" noWrap>
             Wikipedia Most Read
            </Typography>
          </Toolbar>
        </AppBar>
    );
}

export default navbar;