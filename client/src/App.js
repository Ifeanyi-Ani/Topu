import './App.css';
import {Container, AppBar, Typography, Grow, Grid} from '@mui/material'
import Form from './component/form/Form';
import Post from './component/posts/Post';

function App() {
  return (
    <Container maxWidth='lg'>
      <AppBar position='static' color='inherit'>
    <Typography variant='h2' align='center'>Topu</Typography>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify='space-between' alignItems='stretch' spacing={3}>
            <Grid item xs={12} sm={7}>
             <Post />
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
