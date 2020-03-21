import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom'
import HorizontalMenu from './components/HorizontalMenu'
import Expense from './components/Expense';
import Debts from './components/Debts';

// TODO: 
  // 1. Make expenses route default for the application




// app component displays horizontal switchable menu and contents under the active tabs

class App extends Component {
  
  render() {
    return (
      <div className='ui four column centered grid'>
        <div className='column'>
          <div>
            {/* Horizontal menu contains two switchable tabs, expenses and debts */}
            <HorizontalMenu />
          </div>
          <div>
          {/* switch between expenses and debts tab */}
            <Switch>
              <Route 
                path='/expenses'
                component={Expense}
              />
              <Route 
                path='/debts'
                component={Debts}
              />
            </Switch>
          </div>
        </div>
      </div>

    )
  }
}


export default App;
