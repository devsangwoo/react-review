import React from 'react';

const TodoInsert = () => {
  return (
    <div>
      <form className="TodoInsert">
        <div class="ui fluid icon input">
          <input type="text" placeholder="To add..." />
        </div>
      </form>
      <button class="ui icon button">
        <i class="circular plus icon"></i>
      </button>
    </div>
  );
};

export default TodoInsert;
