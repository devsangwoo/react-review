import React from 'react';

const TodoListItem = () => {
  return (
    <div class="ui list todoListItem">
      <div class="item complete">complete</div>
      <div class="item todo">todo</div>
      <div class="item delete">delete</div>
    </div>
  );
};

export default TodoListItem;
