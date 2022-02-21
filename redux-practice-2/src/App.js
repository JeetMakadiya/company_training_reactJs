import { useSelector } from "react-redux";
import "./App.css";
import { Login } from "./Components/Login/Login";
import { Logout } from "./Components/Logout/Logout";

function App() {
  let isLoggedIn = useSelector((state) => state.reducer.isLoggedIn);
  return <div className="container">{isLoggedIn ? <Logout /> : <Login />}</div>;
}

export default App;
