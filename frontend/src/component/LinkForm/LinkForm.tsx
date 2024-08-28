import React from "react";
import {Button, Grid2, TextField} from "@mui/material";

const LinkForm = () => {

    const submitForm = (event: React.FormEvent) => {
        event.preventDefault();
    };

    return (
        <>
            <Grid2 container spacing={2} component="form" onSubmit={submitForm}>
                <TextField required multiline fullWidth label="Enter URL here" id="url"/>
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