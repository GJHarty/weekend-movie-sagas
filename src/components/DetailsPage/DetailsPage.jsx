import { Button, Card, CardContent, Container, makeStyles } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function DetailsPage() {
    const history = useHistory();
    const details = useSelector(store => store.persistedReducer);
    console.log('persisted details', details);

    const returnHome = () => {
        history.push('/');
    };

    const goToEditPage = () => {
        history.push('/edit');
    };

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

    const cardClasses = cardStyles();

    return (
        <>
            <Container className="detailContainer" maxWidth="md">
                <Card className={cardClasses.root} >
                    <CardContent>
                        <h1 className="detailHeader">Movie Details</h1>
                        <h2>{details.movieTitle}</h2>
                        <img src={details.moviePoster} />
                        <p>{details.movieDesc}</p>
                        <h4>Genres: 
                            {details.genres.map(genre => (
                                <p key={genre}>{genre}</p>
                            ))}
                        </h4>
                        <Button 
                            className="backBtn" 
                            style={{marginBottom: '10px'}} 
                            variant="contained" 
                            color="default" 
                            onClick={returnHome}
                        >
                            Back
                        </Button> 
                        <Button 
                            className="editBtn" 
                            style={{marginBottom: '10px'}} 
                            variant="contained" 
                            color="primary"
                            onClick={goToEditPage}
                        >
                            Edit
                        </Button>  
                    </CardContent>
                </Card>
                
            </Container>
        </>
    )
}