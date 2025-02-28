import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { icecreamActions } from "./icereamSlice";

function IcecreamView() {
  const dispatch = useDispatch();
  const numOfIcecream = useSelector((state) => state.icecream.numOfIcecream);
  return (
    <>
      <h2>Number of ice cream - {numOfIcecream}</h2>
      <button onClick={() => dispatch(icecreamActions.ordered())}>
        Order ice cream
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(icecreamActions.restock(3))}>Restock ice creams</button>
    </>
  );
}

export default IcecreamView;
