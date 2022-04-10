import React from "react";
import { useDispatch } from "react-redux";
import { handleDecrement } from "../redux/actions/counter";

function DecrementBtn() {
  const dispatch = useDispatch();
  return <button onClick={() => dispatch(handleDecrement())}>decrement</button>;
}

export default DecrementBtn;
