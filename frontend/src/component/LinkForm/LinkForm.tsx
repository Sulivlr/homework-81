import {Button, Grid2, TextField} from "@mui/material";
import {useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../app/hooks';


const LinkForm = () => {

  const [url, setUrl] = useState('');
  const dispatch = useAppDispatch();
  const link = useAppSelector(select);


    return (
        <>
            <Grid2 container spacing={2} component="form">
                <TextField
                  required
                  multiline
                  fullWidth
                  label="Enter URL here"
                  id="url" name="url"
                />
                <Grid2>
                    <Button type="submit" variant="contained">
                        Shorten
                    </Button>
                </Grid2>
            </Grid2>
        </>
    );
};

export default LinkForm;