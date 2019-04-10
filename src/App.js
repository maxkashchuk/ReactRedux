import React, { Component } from 'react';
import NewPost from './NewPost'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <NewPost/>
          </div>
          <div className="col-md-6">
            Display posts
          </div>
        </div>
      </div>
    );
  }
}

export default App;
