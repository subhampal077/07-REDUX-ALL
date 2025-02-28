import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { cakeActions } from "./cakeSlice";

function CakeView() {
  const dispatch = useDispatch();
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  return (
    <>
      <h2>Number of cake - {numOfCakes}</h2>
      <button onClick={() => dispatch(cakeActions.ordered())}>
        Order cake
      </button>
      <br />
      <br />
      <button onClick={() => dispatch(cakeActions.restock(3))}>Restock cake</button>
    </>
  );
}

export default CakeView;
