import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from '@mui/material';
import Form from './component/form/Form';
import Posts from './component/posts/Posts';
import { fetchPosts } from './redux/features/postSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Topu
        </Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justify="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
