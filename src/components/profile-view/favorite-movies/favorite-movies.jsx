import { Container, Button, Row, Col, Card } from "react-bootstrap";

export const FavoriteMovies = ({ favorites }) => {
    return (
        <>

            {favorites.map((favorite) => {
                return (
                    <Col md={3} className="mt-4" key={movie._id}>
                        <MovieCard movie={movie} />
                    </Col>
                );
            })}

        </>
    )
}