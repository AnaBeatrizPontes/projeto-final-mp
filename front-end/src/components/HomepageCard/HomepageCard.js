import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

import { useHistory } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 345,
    margin: 10,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function HomepageCard({ form }) {
  const history = useHistory();
  const name = localStorage.getItem('usrName');

  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const openForm = () => {
    if (form.link == null) {
      alert('Link inválido')
      return
    }
    history.push(form.link);
  }

  const showLink = () => {
    alert(form.link)
  }

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={name}
      />
      <CardContent>

        <Typography variant="body1" color="textPrimary" component="p">
          {form.title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton onClick={openForm} aria-label="add to favorites">
          <AssignmentOutlinedIcon />
        </IconButton>
        <IconButton onClick={showLink} aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Description:</Typography>
          <Typography paragraph>
            {form.description}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}