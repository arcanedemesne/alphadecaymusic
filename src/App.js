import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navigation from './modules/navigation';
import './assets/scss/app.css';

class App extends Component {

  render() {
    return (
      <div className="container">

        <Navigation />

        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps)(App);
