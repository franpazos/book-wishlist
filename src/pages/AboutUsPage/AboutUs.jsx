import { Container, Row, Col, Card, ListGroup } from "react-bootstrap"
import fran from "./../../assets/FP.png"
import vero from "./../../assets/VV.png"
import "./AboutUs.css"

export default function AboutUs() {


    return (

        <Container className="aboutUs">

            <h1 className="header">
                Meet the team that created this project!
            </h1>

            <Row className="mt-5 justify-content-center">

                <Col md={6} className="fran">

                    <Card style={{ width: '25rem' }} className="card">

                        <Card.Img variant="top" src={fran} />

                        <Card.Body>

                            <Card.Title className="title">
                                Francisco Pazos
                            </Card.Title>

                            <Card.Text>
                                A passionate front-end developer currently immersed in a web development bootcamp at Ironhack Spain. Thrives on challenging projects that push the boundaries of creativity and innovation. Committed to mastering the art of creating seamless and visually stunning user experiences without forgetting to have fun in the process.
                            </Card.Text>

                        </Card.Body>

                        <ListGroup className="list-group-flush">

                            <Card.Link
                                href="https://linkedin.com/in/francisco-pazos-rey-bb37bb86"
                                target="_blank"
                                className="link">
                                <ListGroup.Item>LinkedIn</ListGroup.Item></Card.Link>

                            <Card.Link
                                href="https://github.com/franpazos"
                                target="_blank"
                                className="link">
                                <ListGroup.Item>GitHub</ListGroup.Item></Card.Link>

                        </ListGroup>

                    </Card>

                </Col>

                <Col md={6}>

                    <Card style={{ width: '30rem' }} className="card">

                        <Card.Img variant="top" src={vero} />

                        <Card.Body>
                            <Card.Title>Veronica Vezzoli</Card.Title>
                            <Card.Text>
                                An inspiring front-end developer at Ironhack Spain, navigating the immersive world of web development with passion and determination. Fueled by kindness, intelligence, and a keen eye for design, she effortlessly overcomes challenges, transforming lines of code into visually stunning and user-friendly digital experiences. In this journey of growth, her creativity shines, making her a standout in the evolving landscape of web development.
                            </Card.Text>
                        </Card.Body>

                        <ListGroup className="list-group-flush">

                            <Card.Link
                                href="https://www.linkedin.com/in/veronica-vezzoli/"
                                target="_blank"
                                className="link">
                                <ListGroup.Item>LinkedIn</ListGroup.Item></Card.Link>

                            <Card.Link
                                href="https://github.com/VeronicaVez"
                                target="_blank"
                                className="link">
                                <ListGroup.Item>GitHub</ListGroup.Item></Card.Link>

                        </ListGroup>

                    </Card>

                </Col>

            </Row>

        </Container>


    )
}
