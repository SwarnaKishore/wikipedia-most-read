
import React from 'react';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

const footer = () => {
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
    );
}

export default footer;
