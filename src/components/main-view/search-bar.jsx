import { Button, Row, Col, Card, Nav, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({movies, user, favorites, token, setUser}) => {
    const [search, setSearch] = useState("");
    const movie = movies.find((movie) => movie.Title.toUpperCase() === search.toUpperCase());
    const navigate = useNavigate();

    const handleSearch = (event) => {
        event.preventDefault();
        if (movie) {
            navigate(`/movies/${movie.Title}`);
        } else {
            alert("No movie found");
        }
    }
  return (
    <Row>
      <Form onSubmit={handleSearch}>
        <Form.Control type="search" placeholder="Search by title" value={search} onChange={(e) => setSearch(e.target.value)} />
        <Button type="submit">Search</Button>
      </Form>
    </Row>
  );
};
