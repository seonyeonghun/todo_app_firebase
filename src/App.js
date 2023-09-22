import "./App.css";
import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
const TodoItemInputField = (props) => {
  const [input, setInput] = useState("");
  const onSubmit = () => {
    props.onSubmit(input); // TodoItemInputField 컴포넌트를 사용하는 App으로 부터 받아온 함수를 콜??
    setInput("");
  };
  return (
    <div>
      <TextField
        id='todo-item-input'
        label='todo item'
        variant='outlined'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button variant='outlined' label='todo submit' onClick={onSubmit}>
        등록
      </Button>
    </div>
  );
};
const TodoItemList = (props) => {
  const todoList = props.todoItemList.map((todoItem, index) => {
    return <li key={index}>{todoItem.todoItemContent}</li>;
  });
  return (
    <div>
      <ul>{todoList}</ul>
    </div>
  );
};
let todoItemId = 0;
const App = () => {
  const [todoItemList, setTodoItemList] = useState([]);
  const onSubmit = (newTodoItem) => {
    setTodoItemList([
      ...todoItemList,
      {
        id: todoItemId++,
        todoItemContent: newTodoItem,
        isFinished: false,
      },
    ]);
  };
  return (
    <div className='App'>
      <TodoItemInputField onSubmit={onSubmit} />
      <TodoItemList todoItemList={todoItemList} />
    </div>
  );
};

export default App;
