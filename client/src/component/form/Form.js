import { TextField, Button, Typography, Paper } from '@mui/material';
import FileBase from 'react-file-base64';
import { useState } from 'react';
const Form = () => {
  const [postData, setPostData] = useState({
    creator: '',
    title: '',
    message: '',
    tags: '',
    selectedFile: '',
  });
  const handleSubmit = () => {};
  return (
    <>
      <Paper>
        <form autoComplete="off" noValidate onSubmit={handleSubmit}>
          <Typography variant="h6">Creating a Memory</Typography>
          <TextField
            name="creator"
            variant="outlined"
            label="Creator"
            fullWidth
            value={postData.creator}
            onChange={e =>
              setPostData({ ...postData, creator: e.target.value })
            }
          ></TextField>
          <TextField
            name="title"
            variant="outlined"
            label="Title"
            fullWidth
            value={postData.title}
            onChange={e => setPostData({ ...postData, title: e.target.value })}
          ></TextField>
          <TextField
            name="message"
            variant="outlined"
            label="Message"
            fullWidth
            value={postData.message}
            onChange={e =>
              setPostData({ ...postData, message: e.target.value })
            }
          ></TextField>
          <TextField
            name="tags"
            variant="outlined"
            label="Tags"
            fullWidth
            value={postData.tags}
            onChange={e => setPostData({ ...postData, tags: e.target.value })}
          ></TextField>
          <div>
            <FileBase
              type="file"
              multiple={false}
              onDone={base64 =>
                setPostData({ ...postData, selectedFile: base64 })
              }
            />
          </div>
        </form>
      </Paper>
    </>
  );
};
export default Form;
