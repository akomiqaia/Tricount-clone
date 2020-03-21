import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'


class App extends Component {
  
  render() {
    return (
          <div className="ui fluid two item pointing menu">
            <NavLink
              to={`/expenses`}
              className='item'
              key='exp1'
            >
              Expenses
            </NavLink>
            <NavLink
              to={`/debts`}
              className='item'
              key='debts1'
            >
              Debts
            </NavLink>
      </div>


    )
  }
}


export default App;
