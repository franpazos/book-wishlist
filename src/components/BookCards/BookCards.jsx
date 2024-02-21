import { CloseButton, Card } from "react-bootstrap"
import "./BookCard.css"
import { Link } from "react-router-dom"

const BookCard = ({ id, title, cover, author, removeCard }) => {

    const { name, lastName } = author;

    return (
        <article className="bookCards">
              <Card className="Bookcard h-100">
            <CloseButton className="btn-close" onClick={() => {removeCard(id)}}/>
                <Link to={`/wishlist/${id}`} className="link-class">
            <Card.Img variant="top" src={cover} />
            <Card.Body>
              <Card.Title>{title}</Card.Title>
              <Card.Text>
                by {name} {lastName}
              </Card.Text>
            </Card.Body>
            </Link>
          </Card>
        </article>
  );
}

export default BookCard