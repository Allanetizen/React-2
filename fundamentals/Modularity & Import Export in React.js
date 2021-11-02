//always recommended to define only one class per file
//importing as one object
import React from 'react';
import * as person from './myfile.js';

export default class App extends React.Component {
  render() {
    return (
      <p>Hello, {person.firstname}!</p>
    );
  }
}

//importing as an alias
//----N.B-> To import, you MUST export