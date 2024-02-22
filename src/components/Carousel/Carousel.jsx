import Carousel from 'react-bootstrap/Carousel';
import Book from "./../../assets/Books.png"
import Reading from "./../../assets/Reading.png"
import Read from "./../../assets/ReadIt.png"
import "./Carousel.css"
import { Container, Col } from 'react-bootstrap';

function CarouselInstruction() {
  return (

    <div className="Carousel">

      <Container>

        <Carousel>

          <Carousel.Item>
            <img src={Book} alt="images with books" className='img' />
            <Carousel.Caption className='text'>

              <h3>What is My Book Wishlist?</h3>

              <p>My Book Wishlist allows you to keep track of the books you read, those you have read, and those you want to read. It includes features such as book ratings and reviews, as well as the ability to engage in conversations with other readers.</p>

            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={Reading} alt="reading images" className='img' />

            <Carousel.Caption className='text'>

              <h3>How does My Book Wishlist work?</h3>

              <p>It's very easy! In the "My Wishlist" section, you will find all of your books. If you want to add more, just click "Add Book" and fill out the form we created for you.</p>

            </Carousel.Caption>
          </Carousel.Item>

          <Carousel.Item>
            <img src={Read} alt="images with books" className='img' />

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