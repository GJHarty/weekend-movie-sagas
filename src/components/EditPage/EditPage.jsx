import React, { useState } from 'react';
import { Button, Container, makeStyles, TextField, 
            TextareaAutosize, FormControl, Card, CardContent, 
                Modal, Typography } from '@material-ui/core';
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function EditPage() {
    const history = useHistory();
    const dispatch = useDispatch();
    const details = useSelector(store => store.persistedReducer);

    const [open, setOpen] = useState(false);
    const [modalStyle] = useState(getModalStyle);
    const [title, setTitle] = useState(details.movieTitle);
    const [description, setDescription] = useState(details.movieDesc);

    // modal toggles
    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // navigate to home page after a cancel or save
    const returnHome = () => {
        history.push('/');
    };

    // grouping our theme initializers here
    const formStyles = makeStyles((theme) => ({
        root: {
          '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
          },
        },
    })); 

    const cardStyles = makeStyles({
        root: {
          minWidth: 275,
        },
        bullet: {
          display: 'inline-block',
          margin: '0 2px',
          transform: 'scale(0.8)',
        },
        title: {
          fontSize: 14,
        },
        pos: {
          marginBottom: 12,
        },
    });

    const modalStyles = makeStyles((theme) => ({
        paper: {
          position: 'absolute',
          width: 400,
          backgroundColor: theme.palette.background.paper,
          border: '2px solid #000',
          boxShadow: theme.shadows[5],
          padding: theme.spacing(2, 4, 3),
        },
    }));

    function getModalStyle() {
        const top = 50;
        const left = 50;
      
        return {
          top: `${top}%`,
          left: `${left}%`,
          transform: `translate(-${top}%, -${left}%)`,
        };
    };

    // theme class initialization
    const formClasses = formStyles();
    const cardClasses = cardStyles();
    const modalClasses = modalStyles();

    // content of the displayed modal
    const cancelBody = (
        <div style={modalStyle} className={modalClasses.paper} >
            <h2 id="simple-modal-title">Are you sure you want to cancel your changes?</h2>
            <div className="modalConfirmation">
                <Button variant="contained" color="default" onClick={handleClose} style={{marginRight : '15px'}}>No</Button>
                <Button variant="contained" color="secondary" onClick={returnHome}>Yes</Button> 
            </div>                                                
        </div>
    );

    return (
        <>
            <Container className="formContainer" maxWidth="sm">
                <h1>EDIT</h1>
                <Card className={cardClasses.root} >
                    <CardContent className={"addMovieCardContent"}>
                        <Typography color="textPrimary" gutterBottom>
                            Please enter any changes you would like to make.
                        </Typography>
                        <FormControl className={formClasses.root} noValidate autoComplete="off" >
                            <TextField id="title" label="Title" value={title} onChange={(event) => setTitle(event.target.value)}/>
                            <TextareaAutosize
                                className="descriptionField" 
                                aria-label="minimum height" 
                                minRows={5} placeholder="Description" 
                                value={description} 
                                onChange={(event) => setDescription(event.target.value)}
                            />
                            <div justifycontent="center">
                                <Button variant="contained" color="default" onClick={handleOpen} style={{marginRight : '15px'}}>Cancel</Button>
                                <Modal
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                >
                                    {cancelBody}   
                                </Modal>
                                <Button variant="contained" color="primary" /* onClick={saveMovie} */>Save</Button>
                            </div>
                        </FormControl>
                    </CardContent>
                </Card>
            </Container>
        </>
    )
}