import React from 'react';
import { Toast, ToastBody, ToastHeader } from 'reactstrap';


class BookToast extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      show: !this.state.show
    });
  }

  render() {
    return (
      <div id="toast">
        <br />
        <br />
        <Toast isOpen={this.state.show}>
          <ToastHeader toggle={this.toggle}>Book Added!</ToastHeader>
          <ToastBody>
              You added {this.props.title} to your bookshelf!
          </ToastBody>
        </Toast>
      </div>
    );
  }
}

export default BookToast;