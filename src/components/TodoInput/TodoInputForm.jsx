import React from 'react';

const TodoInputForm = () => {
  return (
    <div class="ui menu">
      <div class="item" bg-primary my-5>
        <h3>todo list</h3>
      </div>
      <div className="card card-body my-2">
        <form>
          <div class="ui fluid icon input">
            <input type="text" placeholder="To add..." />
            <i class="circular plus icon"></i>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoInputForm;
