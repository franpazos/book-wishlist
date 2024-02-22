import NewBookForm from "../../components/Forms/NewBookForm";
import "./AddBookPage.css"

const AddBookPage = () => {
    return (
        <div className="AddBookPage">
            <h1>Add a New Book</h1>
            <NewBookForm/>
        </div>
    )
}

export default AddBookPage