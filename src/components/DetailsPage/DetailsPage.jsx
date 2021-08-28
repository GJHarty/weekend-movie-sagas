import { Button } from "@material-ui/core";
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
            <h1>Movie Details</h1>
            <Button variant="contained" color="default" onClick={returnHome}>Back</Button>
        </>
    )
}