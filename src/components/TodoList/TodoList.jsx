import React, { useState } from 'react';
import Todo from '../Todo/Todo';
import InputArea from '../InputArea/InputArea';

export default function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  //삭제
  const onClickRemoveButtonHandler = (id) => {
    const newTodo = todos.filter((todos) => todos.id !== id);
    setTodos(newTodo);
  };

  //완료
  const onClickDoneButtonHandler = (id) => {
    const doneTodo = todos.map((todos) =>
      todos.id === id ? { ...todos, isDone: true } : todos
    );
    setTodos(doneTodo);
  };

  //취소
  const onClickCancelButtonHandler = (id) => {
    const newTodo = todos.map((todos) =>
      todos.id === id ? { ...todos, isDone: false } : todos
    );
    setTodos(newTodo);
  };

  return (
    <div>
      <InputArea addTodo={addTodo} />
      <div className="workingContainer">
        <div className="workingTitle">====== Working ======</div>
        <div className="workingContent">
          {todos
            .filter((item) => item.isDone === false)
            .map((item) => {
              return (
                <Todo
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  isDone={item.isDone}
                  onClickRemove={onClickRemoveButtonHandler}
                  onClickdone={onClickDoneButtonHandler}
                />
              );
            })}
        </div>
      </div>
      <div className="doneContainer">
        <div className="doneTitle">====== Done ======</div>
        <div className="doneContent">
          {todos
            .filter((item) => item.isDone === true)
            .map((item) => {
              return (
                <Todo
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  content={item.content}
                  isDone={item.isDone}
                  onClickRemove={onClickRemoveButtonHandler}
                  onClickCancel={onClickCancelButtonHandler}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}
