import { Button, Modal } from "react-bootstrap"
import ReviewForm from "./../Forms/ReviewForm"


export default function ReviewModal(props) {

    const { book, loadBook, closeModal } = props


    return (

        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    <h2>Congratulations! You finished {book.title}!</h2>
                    <p>Now, write a review:</p>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <ReviewForm
                    book={book}
                    closeModal={closeModal}
                    loadBook={loadBook}
                />
            </Modal.Body>
        </Modal>
    )

}