import { Card } from "react-bootstrap";
import "./BookCard.css"

const BookCard = ({ title, cover, author }) => {

    const { name, lastName } = author;

    return (
          <Card className="Bookcard">
            <Card.Img variant="top" src={cover} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                by {name} {lastName}
              </Card.Text>
            </Card.Body>
          </Card>
  );
}

export default BookCard