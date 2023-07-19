import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { useParams } from "react-router";


export const FavoriteMovies = ({ favorites }) => {
    const { username, movieId } = useParams();
    return (
        <>
            <p>No favorites yet</p>
        </>
    )
}