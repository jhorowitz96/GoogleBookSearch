 import React, { Component } from "react";
import axios from "axios";
import { Row, Col } from "../../components/Grid";
import { BookList, BookListItem } from "../../components/BookList";
import EmptyList from "../../components/EmptyList";

class Search extends Component {
  state = {
    searchRes: [],
    query: "",
    books: []
  };

  displayRes = data => {
    this.setState({ books: data.items });
  };

  searchGBooks = () => {
    let url = `https://www.googleapis.com/books/v1/volumes?q=${
      this.state.query
    }`;
    axios
      .get(url)
      .then(res => {
        console.log(res);
        this.displayRes(res.data);
      })
      .catch(err => console.log(err));
  };

  handleInput = event => {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });
    console.log("Query", this.state.query);
  };


  render() {
    return (
      <Row>
        <Col size="md-12">
        <div className="search">

          
          <input id="bookQ" className="form-control form-control-sm" autoComplete="on" type="text" name="query" onChange={this.handleInput} />
          <button id="searchBtn" className="btn btn-light" type="submit" onClick={this.searchGBooks} >
            Search for Books
          </button>
                   

          {(this.state.books && this.state.books.length > 0) ? 
          <BookList>
          {this.state.books.map(book => {
            //console.log("Book",book)
            return (
              <BookListItem
              key={book.id} 
              authors={book.volumeInfo.authors ? book.volumeInfo.authors : ["No Author Available"]}
              title={book.volumeInfo.title}
              synopsis={book.volumeInfo.description ? 
                book.volumeInfo.description : "No Description Available"}
              link={book.selfLink}
              thumbnail={book.volumeInfo.imageLinks.thumbnail ? 
                book.volumeInfo.imageLinks.thumbnail : "https://loremflickr.com/320/240/book"}
              />
            )
          })}
          </BookList>
          : 
          <EmptyList/>         
          }
          
        </div>
        </Col>
      </Row>
    );
  }
}

export default Search;