//high order functions without arrow function
import React from 'react';

function doFilter(query) {
  return function (user) {
    return query === user.name;
  }
}

export default class App extends React.Component {

  constructor(props){
    super(props);  
    
    this.state = {
    query: '',
    };
    
    this.onChange=this.onChange.bind(this);
  }
  
  onChange(event) {
    this.setState({ query: event.target.value });
  }
  
  render() {
  const users = [
      { name: 'Robin' },
      { name: 'Markus' },
    
    ];
    return (
      <div>
        <ul>
          { users
            .filter(doFilter(this.state.query))
            .map(myuser => <li>{myuser.name}</li>)
          }
        </ul>
        <input
          type="text"
          onChange={this.onChange}
        />
      </div>
    );
  }
}
//high order function with arrow function
import React from 'react';

const doFilter = query => user =>
   query === user.name;

export default class App extends React.Component {

  constructor(props){
    super(props);  
    
    this.state = {
    query: '',
    };
    
    this.onChange=this.onChange.bind(this);
  }
  
  onChange(event) {
    this.setState({ query: event.target.value });
  }
  
  render() {
  const users = [
      { name: 'Robin' },
      { name: 'Markus' },
    
    ];
    return (
      <div>
        <ul>
          { users
            .filter(doFilter(this.state.query))
            .map(myuser => <li>{myuser.name}</li>)
          }
        </ul>
        <input
          type="text"
          onChange={this.onChange}
        />
      </div>
    );
  }
}
//example
import React from 'react';

export const doIncrement = state =>
  ({ counter: state.counter + 1 });

export const doDecrement = state =>
  ({ counter: state.counter - 1 });

export default class Counter extends React.Component {
  state = {
    counter: 0,
  };

  onIncrement = () => {
    this.setState(doIncrement);
  }

  onDecrement = () => {
    this.setState(doDecrement);
  }

  render() {
    return (
      <div>
        <p>{this.state.counter}</p>

        <button onClick={this.onIncrement} type="button">Increment</button>
        <button onClick={this.onDecrement} type="button">Decrement</button>
      </div>
    );
  }
}