import './HomePage.css'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Container, Button, Form, Row, Col } from "react-bootstrap"
import NewBookForm from "./../../components/Form/NewBookForm"

const API_BASE_URL = "http://localhost:5005"

const HomePage = () => {

    const [bookData, setBookData] = useState({
        id: "",
        title: "",
        author: {
            name: "",
            lastName: "",
            nobelAwarded: false,
            country: "",
            birth: "",
        },
        genres: [],
        cover: "",
        description: "",
        pages: "",
        language: "",
        publishSpecs: {
            year: 0,
            publisher: "",
        },
        awards: [],
        beenRead: false,
        currentlyReading: false,
        reviewData: {
            rating: 0,
            comment: "",
            date: "",
        }
    })



    return (
        <div className="homepage">
            <h1>Add a new book to your Wishlist!</h1>

            <Container>
                <NewBookForm />
            </Container>



        </div>
    )
}

export default HomePage