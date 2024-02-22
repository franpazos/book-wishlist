import './HomePage.css'
import axios from "axios"
import { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { Container, Button, Form, Row, Col } from "react-bootstrap"
import Carousel from "./../../components/Carousel/Carousel"


const HomePage = () => {

    return (
        <div className="homepage">
            <Carousel/>
        </div>
    )
}

export default HomePage