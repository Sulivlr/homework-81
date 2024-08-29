import { Button, TextField, CircularProgress, Typography, Grid } from '@mui/material';
import React, { ChangeEvent, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { selectLinkIsCreating, selectShortLink } from '../linkSlice';
import { createLink } from '../linkThunk';

const LinkForm = () => {
  const [url, setUrl] = useState('');
  const dispatch = useAppDispatch();
  const link = useAppSelector(selectShortLink);
  const isCreating = useAppSelector(selectLinkIsCreating);

  const onSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (url) {
      dispatch(createLink({ originalUrl: url }));
    }
  };

  const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setUrl(event.target.value);
  };

  return (
    <form onSubmit={onSubmitHandler}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            value={url}
            onChange={onChangeHandler}
            label="Enter URL here"
            id="url"
            name="url"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            type="submit"
            variant="contained"
            disabled={isCreating}
            fullWidth
          >
            {isCreating ? <CircularProgress /> : 'Shorten'}
          </Button>
        </Grid>
        {link && (
          <Grid item xs={12}>
            <Typography variant="body1">
              Shortened URL: <a href={link.originalUrl}>{link.shortUrl}</a>
            </Typography>
          </Grid>
        )}
      </Grid>
    </form>
  );
};

export default LinkForm;
