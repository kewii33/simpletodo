import React from 'react';

export default function Todo({
  id,
  title,
  content,
  isDone,
  onClickRemove,
  onClickdone,
  onClickCancel,
}) {
  return (
    <div className="todoCard">
      <div className="cardTitle">{title}</div>
      <div className="cardContent">{content}</div>
      <div>
        {isDone ? (
          <div className="DoneButtons">
            <button onClick={() => onClickRemove(id)}>삭제하기</button>
            <button onClick={() => onClickCancel(id)}>취소</button>
          </div>
        ) : (
          <div className="DoneButtons">
            <button onClick={() => onClickRemove(id)}>삭제하기</button>
            <button onClick={() => onClickdone(id)}>완료</button>
          </div>
        )}
      </div>
    </div>
  );
}
