import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';

class MostReadArticleCard extends Component {
  render() {
    const {article} = this.props;
    const {key} = this.props;
    console.log(article, key);
  const image = article.thumbnail && <CardMedia className="Card-media" image={article.thumbnail.source} title={article.title}/>;

const card = 
  (
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
    <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
        <FavoriteIcon />
      </IconButton>
      <IconButton aria-label="share">
        <ShareIcon />
      </IconButton>
    </CardActions>
  </Card>
  )
  return card;
  }
}

export default MostReadArticleCard;