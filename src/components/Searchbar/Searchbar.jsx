import { Form, ListGroup } from "react-bootstrap"
import { Link } from "react-router-dom"
import "./Searchbar.css"
import { useState } from "react"
import axios from "axios"

const API_BASE_URL = "http://localhost:5005"

const SearchBar = () => {

    const [results, setResults] = useState ([])

    const handleQuerySearch = event => {
        const {value} = event.target

        value.length > 1 ? fetchResults(value) : setResults([])
    }

    const fetchResults = value => {
        axios
            .get(`${API_BASE_URL}/wishlist?title_like=${value}`)
            .then(({data}) => setResults(data))
            .catch(err => console.log(err))
    }
    
    return(
        <div className="SearchBar">
            <Form>
                <Form.Control
                type="text"
                placeholder="Search..."
                onKeyUp={handleQuerySearch}
                />        
            </Form>
            <ListGroup className="ListGroup">
                {
                    results.map(elm => {
                        return (
                            <Link key={elm.id} to={`/wishlist/${elm.id}`}  className="link-style">
                                <ListGroup.Item><img src={elm.cover} alt="book-img"/></ListGroup.Item>
                                <ListGroup.Item>{elm.title}</ListGroup.Item>
                            </Link>
                        )
                    })
                }
            </ListGroup>
        </div>
)
}

export default SearchBar