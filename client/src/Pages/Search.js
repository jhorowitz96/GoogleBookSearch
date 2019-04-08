import React, { Component } from "react";
// import DeleteBtn from "../components/DeleteBtn";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../components/Grid";
import { List, ListItem } from "../components/List";
import { Input, TextArea, FormBtn } from "../components/Form";

class Books extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    image: "",
    url: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "", image: "", url: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis,
        image: this.state.image,
        url: this.state.url
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>What Book Should I Read?</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.title}
                onChange={this.handleInputChange}
                name="title"
                placeholder="Title (required)"
              />
              <FormBtn
                disabled={!(this.state.author && this.state.title)}
                onClick={this.handleFormSubmit}
              >
                Search Book
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Book Searched</h1>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    {/* <DeleteBtn onClick={() => this.deleteBook(book._id)} /> */}
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;




// import React from "react";
// import SearchForm from "../components/searchForm";
// import ResultsContainer from "../components/results";
// import API from "../utils/API"

// class Search extends React.Component {
//     constructor(props)  {
//       super(props)
//         this.state = {
//             bookInput: "",
//             bookData: []
//         }
//         this.handleSearchClick = this.handleSearchClick.bind(this);
//         this.handleChange = this.handleChange.bind(this);
//     }

//     handleChange(e) {
//         e.preventDefault();
//         this.setState({bookInput: e.target.value})
//     }

//     handleSearchClick(e) {
//         e.preventDefault();
//         API.searchBooks(this.state.bookInput)
//             .then(
//                 (response) => {
//                     this.setState({bookData: response.data});
//                     this.setState({bookInput: ""});
//                 }
//             );
//     }

//     render() {
//         return(
//             <main>
//                 <SearchForm handleChange={this.handleChange} handleSearchClick={this.handleSearchClick} />
//                 {(this.state.bookData.length > 0)?
//                     <ResultsContainer bookData={this.state.bookData} path={this.props.match.path}/> : null
//                 }
//             </main>
//         );
//     }
// }

// export default Search;