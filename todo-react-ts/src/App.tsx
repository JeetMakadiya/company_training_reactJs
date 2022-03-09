import { ChangeEvent, FC, useState } from "react";
import "./App.css";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { todo } from "./typeScript";

const App: FC = () => {
  const [inputTodoText, setInputTodoText] = useState<string>("");
  const [todo, setTodo] = useState<todo[]>([]);
  const handleTodoInput = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputTodoText(event.target.value);
  };
  const handleAddTodo = () => {
    let todoItem: todo = {
      id: new Date().getTime.toString(),
      title: inputTodoText,
    };
    setTodo((currentTodo: todo[]) => {
      return [...currentTodo, todoItem];
    });
  };
  return (
    <Container>
      <div className="pt-5">
        <Row className="">
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                placeholder="Enter Todo"
                onChange={handleTodoInput}
                value={inputTodoText}
              />
            </Form.Group>
          </Col>
          <Col>
            <Button variant="primary" onClick={handleAddTodo}>
              Add Todo
            </Button>
          </Col>
        </Row>
      </div>
      <div>
        <ul className="list-unstyled">
          {todo.map((item: todo, id: number) => {
            return (
              <li className="bg-secondary mb-2 ps-2 pt-2 pb-2" key={id}>
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </Container>
  );
};

export default App;
