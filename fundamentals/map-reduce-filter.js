//without map() function --cant Iterate
import React from 'react';

export default class App extends React.Component {
  render() {
    var user = { name: 'Robin' };
    return (
      <div>
        <h1>{user.name}</h1>
      </div>
    );
  }
}
//map() without arrow function
import React from 'react';

export default class App extends React.Component {
  render() {
    var users = [
      { name: 'Robin' },
      { name: 'Markus' },
    ];

    return (
      <ul>
        {users.map(function (user) {
          return <li>{user.name}</li>;
        })}
      </ul>
    );
  }
}
//map() with arrow function
import React from 'react';

export default class App extends React.Component {
  render() {
    var users = [
      { name: 'Robin' },
      { name: 'Markus' },
    ];

    return (
      <ul>
        {users.map(user => <li>{user.name}</li>)}
      </ul>
    );
  }
}
//filter  and reduce
export default class App extends React.Component {
    render() {
      var users = [
        { name: 'Robin', isDeveloper: true },
        { name: 'Markus', isDeveloper: false },
        { name: 'John', isDeveloper: true },
      ];
  
      return (
        <ul>
          {users
            .filter(user => user.isDeveloper)
            .map(user => <li>{user.name}</li>)
          }
        </ul>
      );
    }
  }
