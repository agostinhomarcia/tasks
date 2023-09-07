import React from 'react';
import Tasks from '../tasks';

function TaskList({ tasks }) {
  return (
    <div>
      <h2>Task List</h2>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default TaskList;
