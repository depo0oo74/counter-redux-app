import React from 'react'
import {useDispatch} from 'react-redux'
import {handleIncrement} from '../redux/actions/counter'

function IncrementBtn() {
  const dispatch = useDispatch()
  return <button onClick={() => dispatch(handleIncrement())}>increment</button>
}

export default IncrementBtn