import { Row, Col, Card, Container } from "react-bootstrap";

const BookCard = ({ title, cover, author }) => {

    const { name, lastName } = author;

    return (
        <Container >
        <Row xs={1} md={4} className="g-4">
        <Col key={4}>
          <Card>
            <Card.Img variant="top" src={cover} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                by {name} {lastName}
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        </Row>
        </Container>
  );
}

export default BookCard