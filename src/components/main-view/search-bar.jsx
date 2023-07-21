import { Button, Row, Col, Card, Nav, Form } from "react-bootstrap";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const SearchBar = ({ movies, user, favorites, token, setUser }) => {
  const [search, setSearch] = useState("");
  const movie = movies.find(
    (movie) => movie.Title.toUpperCase() === search.toUpperCase()
  );

  const navigate = useNavigate();

  //navigate to MainView for movie if there's a match
  const handleSearch = (event) => {
    event.preventDefault();
    if (movie) {
      navigate(`/movies/${movie.Title}`);
    } else {
      alert("No movie found");
    }
  };
  return (
    <Row>
      <Form onSubmit={handleSearch} className="d-flex" >
        {/* className="d-flex justify-content-end mt-4" */}
        <Form.Control
          type="search"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="me-2"
        aria-label="Search"
        />
        <Button type="submit" variant="outline-success">Search</Button>
      </Form>
    </Row>
  );
};
