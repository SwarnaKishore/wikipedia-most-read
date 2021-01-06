import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
import VisibilityIcon from '@material-ui/icons/Visibility';

class MostReadArticleCard extends Component {
  render() {
    const {article} = this.props;
    const {key} = this.props;
    console.log(article, key);
    const contentUrl = article.content_urls && article.content_urls.desktop && article.content_urls.desktop.page ? article.content_urls.desktop.page : '';
    const image = article.thumbnail && <CardMedia className="Card-media" image={article.thumbnail.source} title={article.title}/>;

const card = 
  (
    <React.Fragment>
      <a className="contentUrl" href={contentUrl} target="_blank">
        <Card key={key} className="Card"> 
          <CardHeader
            title={article.title}
            subheader={article.views}
          />
            {image ? image : ''}
          <CardContent>
            <Typography>
              {article.description}
            </Typography>
          </CardContent>
          {/* <CardActions disableSpacing>
            <IconButton aria-label="view">
              <VisibilityIcon />
            </IconButton>
          </CardActions> */}
        </Card>
      </a>
      
    </React.Fragment>
  )
  return card;
  }
}

export default MostReadArticleCard;