import "./App.css";
import { Header } from "./Components/Header/Header";
import { TodoListWrapper } from "./Components/TodoList/TodoListWrapper";

function App() {
  return (
    <div>
      <Header />
      <section className="todoListSection container">
        <TodoListWrapper />
      </section>
    </div>
  );
}

export default App;
