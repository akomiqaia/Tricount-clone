import React, { Component } from 'react';
import { createStore } from 'redux'
import moment from 'moment'
import uuid from 'uuid'
import CheckBox from './FormComponents'

// define type of actions as constants to reduce the possibility of typo while builidng the store for the app
const ADD_EXPENSE = 'ADD_EXPENSE'
const DELETE_EXPENSE = 'DELETE_EXPENSE'


const initialState = {listOfExpenses: []}


function reducer(state, action) {
  if (action.type === ADD_EXPENSE) {
    const newExpense = {
      id: uuid.v4(),
      text: action.text,
      timestamp: moment().format("Do of MMM"),
      payedBy: action.payedBy,
      amountPayed: action.amount
    }
    return {
      listOfExpenses: state.listOfExpenses.concat(newExpense)
    }
    // if action type is delete with using filter we can remove the list item we want.
    // we’re building a new array containing every object that does not 
    // have an id that corresponds to the action’s id .
  } else if (action.type === DELETE_EXPENSE) {
    return {
      listOfExpenses: state.listOfExpenses.filter((item) => (
        item.id !== action.id
      ))
    }
  } else {
    return state
  }
}

const store = createStore(reducer, initialState)

class Expense extends Component {
  componentDidMount() {
    store.subscribe(() => this.forceUpdate())
  }
  render() {
    const listOfExpenses = store.getState().listOfExpenses
    return (
      <div className='ui centered segment'>
          <ListOfExpenses listOfExpenses={listOfExpenses} />
          <ListInput />
      </div>
    );
  }
}

class ListInput extends React.Component {
  state = {
    isOpen: false,
    title: '',
    amount: '',
    payedBy: 'Andrea',
    // forWhom will keep the state of checkbox with whom the payer has to split the bill
    forWhom: [
      {id: 1, value: 'Andrea', isChecked: false, dynamicMoney: 0},
      {id:2, value: 'Ariann', isChecked: false, dynamicMoney: 0},
      {id:3, value: 'Ako', isChecked: false, dynamicMoney: 0},
      {id:4, value: 'Evie', isChecked: false, dynamicMoney: 0},
      {id:5, value: 'Camilla', isChecked: false, dynamicMoney: 0},
      {id:6, value: 'Max', isChecked: false, dynamicMoney: 0},
      {id:7, value: 'Molly', isChecked: false, dynamicMoney: 0},
    ]
  }
  handleFormOpen = () => {
    this.setState({ isOpen: true })
  }
  handleFormcClose = () => {
    this.setState({ isOpen: false })
  }
  onChange = (e) => {
    if(e.target.name === 'title') {
      this.setState({
        title: e.target.value,
      })
    } else if (e.target.name === 'amount') {
    this.setState({
      amount: e.target.value,
    })} else if (e.target.name === 'select') {
      this.setState({
        payedBy: e.target.value,
      })
    }
  };
// on submit the data needed has to be displayed on the screen
// handleCheck() function updates components state and some of the data such as dynamicMoney will be used to calculate total debts
  handleSubmit = (event) => {
    event.preventDefault()

    store.dispatch({
      type: ADD_EXPENSE,
      text: this.state.title,
      amount: this.state.amount,
      payedBy: this.state.payedBy
    })
    this.setState(
      {
        isOpen: false,
        title: '',
        amount: '', 
        payedBy: 'Andrea',
        forWhom: [
          {id: 1, value: 'Andrea', isChecked: false, dynamicMoney: 0},
          {id:2, value: 'Ariann', isChecked: false, dynamicMoney: 0},
          {id:3, value: 'Ako', isChecked: false, dynamicMoney: 0},
          {id:4, value: 'Evie', isChecked: false, dynamicMoney: 0},
          {id:5, value: 'Camilla', isChecked: false, dynamicMoney: 0},
          {id:6, value: 'Max', isChecked: false, dynamicMoney: 0},
          {id:7, value: 'Molly', isChecked: false, dynamicMoney: 0},
        ]
      }
      )
    
  }

  // handleCheck will handle checkbox functionality and also be responsible of updating the dynamicMoney
  // dynamic money is the total amount splet among the checked users.
  handleCheck = (e) => {
    let forWhom = this.state.forWhom
    let amount= this.state.amount
    forWhom.forEach((user) => {
      if(user.value === e.target.value) {
        user.isChecked = e.target.checked


        let checkedUser = forWhom.filter(user => user.isChecked)
        let dynamicMoney = amount/checkedUser.length
        // if user is unchecked his balance has to be zero
        if(!user.isChecked) {
          user.dynamicMoney = 0
        }
        // FOR EVERY CHEKED USER WE HAVE TO DISPLAY SPLIT BALANCE THAT WILL EVNTUALLY ADD ON MAIN STATE
        checkedUser.forEach(user => {
          user.dynamicMoney = dynamicMoney
        })
        
        
      }
    })
    this.setState({forWhom: forWhom})
  }
  

  render() {
    if(this.state.isOpen) {
      return(
      <form className="ui form">
        <div className="field">
          <label>Title</label>
          <input
            onChange={this.onChange}
            value={this.state.title} 
            type="text" 
            name="title" 
          />
        </div>
        <div className="field">
          <label>Amount</label>
          <input 
            type="number" 
            name="amount" 
            onChange={this.onChange}
            value={this.state.amount}
          />
        </div>
        <div className='field'>
          <label>Paid by:</label>
          {/* dropdown menu to slect who payed for the item */}
          <select name='select' className="ui fluid dropdown" onChange={this.onChange}>
            {this.state.forWhom.map((user) => {
              return(
                <option
                  key={user.id} 
                  value={user.value}
                >
                    {user.value}
                </option>
              )
            })}
          </select>
        </div>
        <div className='ui divider'></div>
        <div className="field">
            {this.state.forWhom.map((user) => {
              return(
                <CheckBox
                  dynamicMoney={this.state.forWhom.dynamicMoney}
                  key= {user.id}
                  handleCheck={this.handleCheck}
                   {...user}
                />
                
              )
            })}
        </div>
        <button 
          onClick={this.handleSubmit}
          className="ui primary button" 
          type="submit">Submit</button>
          <button 
          onClick={this.handleFormcClose}
          className="ui secondary button" 
          type="submit">Cancel</button>
      </form>
    ) } else {
      return (
        <div className='ui basic content center aligned segment'>
          <button
            className='ui basic button icon'
            onClick={this.handleFormOpen}
          >
            <i className='plus icon' />
          </button>
        </div>
      )
    }
  }
}

class ListOfExpenses extends React.Component {
  handleClick = (id) => {
    store.dispatch({
      type: DELETE_EXPENSE,
      id: id,
    })
  }
  render() {
    

    const listItems = this.props.listOfExpenses.map((listItem, index) => (
        <div 
          className="item"

          key={index}
          onClick={() => this.handleClick(listItem.id)}
          >
          
          <div className="content">
            <div className="header">{listItem.text}</div>
            <div className="ui right floated header">{`${listItem.amountPayed} £`}</div>
            <div className="meta">
              <span>Payed by: <strong>{listItem.payedBy}</strong></span>
              <span className='ui right floated'>{listItem.timestamp}</span>
            </div>
            
          </div>
        </div>
    ))
    return (
      <div className='ui divided link items'>
        
          {listItems}
        
      </div>
    )
  }
  
}

export default Expense;
