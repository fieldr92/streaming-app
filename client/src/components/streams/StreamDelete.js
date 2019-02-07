import React, { Component } from 'react';
import Modal from '../Modal';
import history from '../../history';

class StreamDelete extends Component {
  componentDidMount() {}

  renderActions() {
    return (
      <>
        <button className="ui button negative">Delete</button>
        <button className="ui button">Cancel</button>
      </>
    );
  }

  render() {
    return (
      <div>
        <Modal
          title="Delete Stream"
          content="Are you sure you want to delete this stream?"
          actions={this.renderActions()}
          onDismiss={() => history.push('/')}
        />
      </div>
    );
  }
}

export default StreamDelete;
