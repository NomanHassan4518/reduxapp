import React from 'react'
import { useDispatch } from 'react-redux'
import { actionCreaters } from './State/index';
// import { bindActionCreators } from 'redux';

const Shoes = () => {
  const dispatch = useDispatch();
  // const { depositeMoney, withdrawMoney } = bindActionCreators(actionCreaters, dispatch)
  return (
    <div className="container">
      <h2>Deposite/Withdraw Money</h2>
      <button className="btn btn-primary mx-2" onClick={() => {dispatch(actionCreaters.depositMoney(100))}}>+</button>
      Update Money
      <button className="btn btn-primary mx-2" onClick={() => { dispatch(actionCreaters.withdrawMoney(100)) }}>-</button>
      {/* <button className="btn btn-primary mx-2" onClick={()=>{depositeMoney(100)}}>+</button>
    Update Money
    <button className="btn btn-primary mx-2" onClick={()=>{withdrawMoney(100)}}>-</button> */}

    </div>
  )
}

export default Shoes
