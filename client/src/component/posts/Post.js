import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';

import moment from 'moment';
import { ThumbUp, Delete, MoreHoriz } from '@mui/icons-material';
const Post = ({ post }) => {
  return (
    <Card>
      <CardMedia component="img" image={post.selectedFile} title={post.title} />
      <div>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="h6">{moment(post.createdAt).fromNow()}</Typography>
      </div>
      <div>
        <Button style={{ color: 'primary' }} size="small" onClick={() => {}}>
          <MoreHoriz fontSize="default" />
        </Button>
      </div>
      <div>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map(tag => tag)}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="body2" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUp fontSize="small" />
          like {post.like}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          <Delete />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};
export default Post;
