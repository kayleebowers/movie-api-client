import { Button, Row, Col, Card, Nav, Form } from "react-bootstrap";
import { useState } from "react";

export const SearchBar = ({movies, user, favorites, token, setUser}) => {
    const [search, setSearch] = useState("");
    const movie = movies.find((movie) => movie.Title.toUpperCase() === search.toUpperCase());
    
    const handleSearch = () => {
        if (movie) {
            <Link to={`/movies/${encodeURIComponent(movie.Title)}`}></Link>
        } else {
            <Col>No movie found</Col>
        }
    }
  return (
    <Row>
      <Form onSubmit={handleSearch}>
        <Form.Group className="mb-3" controlId="search_input">
          <Form.Control type="text" placeholder="Search by title" value={search} onChange={(e) => setSearch(e.target.value)} />
        </Form.Group>
        <Button type="submit">Search</Button>
      </Form>
    </Row>
  );
};
