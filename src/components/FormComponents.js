import React from "react";

export const CheckBox = props => {
  let style= {
    float: 'right',
    marginRright: '0.25em'
  }
  return (
    <div key={props.id}>

      <input
        key = {props.id}
        onChange={props.handleCheck}
        type="checkbox" 
        checked={props.isChecked} 
        value={props.value}  
      />
      <label>{props.value}</label>
      <span style={style}>{props.dynamicMoney}</span>
      <div className='ui divider'></div>

    </div>
    
  )
}


export default CheckBox