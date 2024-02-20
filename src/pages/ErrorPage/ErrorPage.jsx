import sadBook from "./../../assets/404.png"
import "./ErrorPage.css"
import { Link } from "react-router-dom"
import { Button } from "react-bootstrap"

const ErrorPage = () => {

    return (
        <div className="error-page">
            <article className="error">
            <img src={sadBook} alt="not found"/>
            <div className="text-only">
            <h2>Oops... Page not found!</h2>
            <p>The requestes page couldn't be located.</p>
            <p>Checkout for any URL misspelling or <Link to="/" className="link-style">return to the homepage.</Link></p>
            <Link to="/">
                <Button className="home-btn">
                    Homepage
                </Button>
            </Link>
            </div>
            </article>
        </div>
    )
}

export default ErrorPage