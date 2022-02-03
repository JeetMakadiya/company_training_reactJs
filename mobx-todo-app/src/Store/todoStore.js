import { action, observable } from "mobx";

export const todoStore = observable({
  todoItems: [],
  addTodoItem: action("addTodoItem", (item) => {
    todoStore.todoItems.push(item);
  }),
  setTodoStatus: action("setTodoStatus", (id, status) => {
    for (let item of todoStore.todoItems) {
      if (item.todoId === id) {
        item.todoStatus = status;
      }
    }
  }),
  deleteTodoItem: action("deleteTodoItem", (id) => {
    const arr = todoStore.todoItems.filter((elem) => {
      return elem.todoId !== id;
    });
    todoStore.todoItems = arr;
  }),
  get totalTodo() {
    return this.todoItems.length;
  },
  get completedTodo() {
    return this.todoItems.filter((item) => {
      return item.todoStatus === true;
    }).length;
  },
});
