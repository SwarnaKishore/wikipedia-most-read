import React, {Component} from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Chip from '@material-ui/core/Chip';
import CardActionArea from '@material-ui/core/CardActionArea';

class MostReadArticleCard extends Component {
  render() {
    const {article} = this.props;
    const contentUrl = article.content_urls && article.content_urls.desktop && article.content_urls.desktop.page ? article.content_urls.desktop.page : '';
    const image = article.thumbnail && <CardMedia className="Card-media" image={article.thumbnail.source} title={article.title}/>;
    const articleViews = <Chip size="small" icon={<VisibilityIcon />} label={article.views + ' views'}/>;

  return (
    <React.Fragment>
      <a className="contentUrl" rel="noreferrer" href={contentUrl} target="_blank">
        <Card className="Card">
          <CardActionArea>
              {image ? image : ''}
              <CardContent>
                <Typography className="Card-title" gutterBottom variant="h5" component="h2"> {article.title}</Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  {article.description}
                </Typography>
                <Typography className="Card-views">{articleViews}</Typography>
              </CardContent>
          </CardActionArea>
        </Card>
      </a>
    </React.Fragment>
  )
  }
}

export default MostReadArticleCard;