import React, { Component } from 'react';
import {Row, Col} from "../../components/Grid";
import {BookList, BookListItem} from "../../components/BookList";
import axios from "axios";
import EmptyList from '../../components/EmptyList';

class Saved extends Component {
    state = {
        savedBooks: [],
        initialized: true
    }

  componentDidMount(){
    this.getBooks();
  }

  getBooks = () => {
    axios.get("/api/books")
    .then(res => {
      this.setState({savedBooks: res.data})
  })
    .catch((err => console.log(err)))
  }

  deleteFromDB = id => {
    console.log(id);

    axios.delete(`/api/books/${id}`)
    .then(
        this.getBooks()
    )
    .catch(err => console.log(err))
  }

  render() {
    return (
      <div id="wrap">
      <Row>
        <Col size="md-12">
          {this.state.savedBooks.length > 0 ? 
          <BookList>
          {this.state.savedBooks.map(book => {
            console.log(book)
            return (
              <BookListItem
              key={book.id}
              _id={book._id}
              authors={book.authors}
              title={book.title}
              synopsis={book.synopsis}
              link={book.link}
              thumbnail={book.thumbnail}
              delete={()=> this.deleteFromDB(book._id)}
              />
            )
          })}
          </BookList>
          :
          <EmptyList/>          
          }
          </Col>
      </Row>
      </div>
    );
  }
}

export default Saved;