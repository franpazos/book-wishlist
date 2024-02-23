import { Button, Modal } from "react-bootstrap"
import axios from "axios"
import { useNavigate } from "react-router-dom"


const API_BASE_URL = "https://mybookwishlist-api.fly.dev"

export default function DeleteModal(props) {

    const navigate = useNavigate()

    const { bookId } = props

    const deleteBook = () => {
        axios
            .delete(`${API_BASE_URL}/wishlist/${bookId}`)
            .then(() => navigate('/wishlist'))
            .catch(err => console.log(err))
    }

    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Are you sure you want to delete this book?
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                    Deleting this book will erase it from your Wishlist. This can not be reversed and you would have to add it all over again.
                </p>
                <p>
                    Remember this is a list of books you want to read somewhere in the future. This  can be in the near future or in a more distant one.
                </p>
                <p>
                    Also, if you have finished reading it, we recommend keeping it for future reference. Remember to mark it as read and add a review.
                </p>


            </Modal.Body>
            <Modal.Footer>
                <Button
                    onClick={deleteBook}
                    variant="danger"
                    size="lg">
                    Delete
                </Button>
                <Button
                    onClick={props.onHide}
                    size="lg">
                    Nevermind
                </Button>
            </Modal.Footer>
        </Modal>
    )

}