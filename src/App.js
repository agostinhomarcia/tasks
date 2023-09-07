import React from 'react';
import TaskList from './components/tasksList';

function App() {
  const tasks = [
    { title: 'Task 1', completed: false },
    { title: 'Task 2', completed: true },
    // Adicione suas tarefas aqui
  ];

  return (
    <div className="App">
      <h1>Task List</h1>
      <TaskList tasks={tasks} />
    </div>
  );
}

export default App;