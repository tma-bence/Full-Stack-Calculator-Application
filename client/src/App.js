import React, { Component, Fragment } from 'react';
import './App.css';

import Input from './components/input';
import Output from './components/output';

class App extends Component {
  render(){
    return (
      <Fragment>
        <div className="container">
        <h1 className='mt-5 mb-5'>Full-Stack Calculator App</h1>
          <Input />
        </div>
        <div className="container">
        <h3 className="mt-5">Get data from server / save data to server</h3>
          <Output />
        </div>
      </Fragment>
    );
  }
}

export default App;
