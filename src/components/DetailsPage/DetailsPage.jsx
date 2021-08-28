import { Button, Container } from "@material-ui/core";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function DetailsPage() {
    const details = useSelector(store => store.details);
    console.log('current details:', details);
    const history = useHistory();

    const returnHome = () => {
        history.push('/');
    }

    return (
        <>
            <Container className="detailContainer" maxWidth="md">
                <h1 className="detailHeader">Movie Details</h1>
                <h2>{details.movieTitle}</h2>
                <img src={details.moviePoster} />
                <p>{details.movieDesc}</p>
                <h4>Genres: 
                    {details.genres.map(genre => (
                        <p key={genre}>{genre}</p>
                    ))}
                </h4>
                <Button variant="contained" color="default" onClick={returnHome}>Back</Button>
            </Container>
        </>
    )
}