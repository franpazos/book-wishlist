import { CloseButton, Card } from "react-bootstrap";
import "./BookCard.css"
import { Link } from "react-router-dom";

const BookCard = ({ id, title, cover, author, removeCard }) => {

    const { name, lastName } = author;

    return (
        <article className="bookCards">
          <CloseButton variant="top" size="sm" className="closebutton-style" onClick={() => {removeCard(id);
            }}/>
             <Link to={`/wishlist/${id}`} className="link-class">
              <Card className="Bookcard h-100">
            <Card.Img variant="top" src={cover} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                by {name} {lastName}
              </Card.Text>
            </Card.Body>
          </Card>
          </Link>
        </article>
  );
}

export default BookCard