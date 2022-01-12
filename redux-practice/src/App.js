import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber, multNumber, divideNumber } from "./actions/index"

function App() {
  const myState = useSelector((state) => state.changeNumber);
  const myState2 = useSelector((state) => state.multDivNumber);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Redux Practice</h1>
      <br />
      <section>
        <h2>Increament/Decreament By 1</h2>
        <div>
          <button onClick={() => dispatch(decNumber())}>-</button>
          <span className="result">{myState}</span>
          <button onClick={() => dispatch(incNumber())}>+</button>
        </div>
      </section>
      <br/>
      <section>
        <h2>Multiplication/Division By 2</h2>
        <div>
          <button onClick={() => dispatch(divideNumber())}>/</button>
          <span className="result">{myState2}</span>
          <button onClick={() => dispatch(multNumber())}>*</button>
        </div>
      </section>
    </>
  );
}

export default App;
