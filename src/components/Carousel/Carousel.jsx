import Carousel from 'react-bootstrap/Carousel';
import Books from "./../../assets/Books.png"
import Reading from "./../../assets/Reading.png"
import Read from "./../../assets/ReadIt.png"
import "./Carousel.css"
import { Container } from 'react-bootstrap';

function CarouselInstruction() {
  return (
    <div className="Carousel">
    <Container>
    <Carousel>
      <Carousel.Item>
        <img src={Books} alt="images with books" />
        <Carousel.Caption className='text'>
          <h3>What is My Book Wishlist?</h3>
          <p>My Book Wishlist allows you to track and control the books you read, those you have read, and those you want to read. It includes features such as book ratings and reviews, as well as the ability to engage in conversations with other readers.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Reading} alt="reading images" />
        <Carousel.Caption className='text'>
          <h3>How does My Book Wishlist work?</h3>
          <p>It's very easy! In "My Wishlist" section, you will find all your books, and if you want to add more, just click on "Add Book" and fill up the form we create for you.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src={Read} alt="images with books" />
        <Carousel.Caption className='last-text'>
          <h3>What are you waiting for?</h3>
          <h3>Try it now! ☺</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
    </div>
  );
}

export default CarouselInstruction;