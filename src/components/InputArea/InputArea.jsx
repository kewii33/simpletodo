import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export default function InputArea({ addTodo }) {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const titleChangeHandler = (event) => {
    setTitle(event.target.value);
  };
  const contentChangeHandler = (event) => {
    setContent(event.target.value);
  };
  const clickAddButtonHandler = (event) => {
    event.preventDefault();

    if (!title || !content) {
      alert('제목과 내용을 모두 입력하세요.');
      return;
    }

    const newTodo = {
      id: uuidv4(),
      title,
      content,
      isDone: false,
    };
    addTodo(newTodo);
    setTodos([...todos, newTodo]);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={clickAddButtonHandler}>
      <div>
        제목 :
        <input
          value={title}
          onChange={(event) => titleChangeHandler(event)}
        ></input>
      </div>
      <div>
        내용 :
        <input
          value={content}
          onChange={(event) => contentChangeHandler(event)}
        ></input>
        <button type="submit">추가하기</button>
      </div>
    </form>
  );
}
