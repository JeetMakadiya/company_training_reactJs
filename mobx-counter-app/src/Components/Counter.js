import React from "react";
import { counterState } from "../store/counterStore";
import { observer } from "mobx-react";

export const Counter = observer(() => {
  return (
    <div className="counterWrapper">
      <span>Counter : {counterState.count}</span>
      <div>
        <button onClick={counterState.incrementCount}>Increment</button>
        <button onClick={counterState.decrementCount}>Decrement</button>
      </div>
      <span>Multiply By 2 : {counterState.countMultiByTwo}</span>
      <span>Multiply By 10 : {counterState.countMultiByTen}</span>
    </div>
  );
});
