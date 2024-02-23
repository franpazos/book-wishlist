import { CloseButton, Card, Button } from "react-bootstrap"
import "./BookCard.css"
import { Link } from "react-router-dom"
import axios from "axios"

const BookCard = ({ id, title, cover, author, removeCard, beenRead, currentlyReading }) => {

  const { name, lastName } = author;

  return (
    <article className="bookCards">
      <Card className="Bookcard h-100">
        <CloseButton className="btn-close" onClick={() => { removeCard(id) }} />
        <Link to={`/wishlist/${id}`} className="link-class">
          <Card.Img variant="top" src={cover} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              <div className="author-read">by {name} {lastName}
                {beenRead ? <p>Read ✓</p> : null}
                {currentlyReading ? <p>Work in Progress 🛠 </p> : null}
              </div>
            </Card.Text>
          </Card.Body>
        </Link>
      </Card>
    </article>
  );
}

export default BookCard