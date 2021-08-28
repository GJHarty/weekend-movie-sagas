import { useSelector } from "react-redux";

export default function DetailsPage() {
    const details = useSelector(store => store.details);
    console.log('current details:', details);
    
    return (
        <>
            <h1>Movie Details</h1>
        </>
    )
}