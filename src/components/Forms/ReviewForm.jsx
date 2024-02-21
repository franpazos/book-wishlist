import { Form, Button } from "react-bootstrap"
import { useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

const API_BASE_URL = "http://localhost:5005"

export default function ReviewForm({ book }) {

    const [bookData, setBookData] = useState(book)

    const { bookId } = useParams()


    const navigate = useNavigate()

    const handleAddReview = async (e) => {
        e.preventDefault()

        try {
            await axios.put(`${API_BASE_URL}/wishlist/${bookId}`, bookData)
            props.onHide()
            navigate(`/wishlist/${bookId}`)
        } catch (err) {
            console.log(err)
        }
    }

    const handleReviewChange = e => {
        const { value, name } = e.target;
        setBookData({
            ...bookData,
            reviewData: {
                ...bookData.reviewData,
                [name]: name === 'rating' ? parseInt(value, 10) : value
            }
        })
    }

    return (
        <Form onSubmit={handleAddReview}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>Rate {book.title} in a scale of 1 to 5</Form.Label>
                <Form.Select
                    type='number'
                    value={bookData.reviewData.rating}
                    onChange={handleReviewChange}
                    name={'rating'}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>What did you think of the book? Leave your review!</Form.Label>
                <Form.Control
                    as="textarea"
                    rows={3}
                    placeholder="Leave your comment here..."
                    onChange={handleReviewChange}
                    value={bookData.reviewData.comment}
                    name="comment" />
            </Form.Group>
            <hr />
            <Button variant="success" size="lg" type="submit">
                Add new book
            </Button>
        </Form>

    )
}