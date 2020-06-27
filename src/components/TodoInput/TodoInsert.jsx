import React from 'react';

const TodoInsert = () => {
  return (
    <div>
      <form className="TodoInsert">
        <div className="inputframe">
          <input type="text" placeholder="To add..." />
        </div>
      </form>
      <button className="addBtn">add</button>
    </div>
  );
};

export default TodoInsert;
