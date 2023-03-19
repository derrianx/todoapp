import React, { useState } from "react";
// for semantic ui
import { Button, Input, List } from "semantic-ui-react";
import logo from "./logo.svg";
import "./App.css";

function TodoList() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  return (
    <div className="MyTasksPage-list">
      <TaskForm onAddTask={handleAddTask} />
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
}

function TaskForm({ onAddTask }) {
  const [task, setTask] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!task) {
      return;
    }

    const newTask = { id: Date.now(), title: task };
    onAddTask(newTask);
    setTask("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={task}
        onChange={(event) => setTask(event.target.value)}
        placeholder="Add a task"
      />
      <Button class="ui loading button" type="submit" primary>
        <i className="plus icon"></i>
        Add Task
      </Button>
      <button class="ui facebook button">
        <i class="facebook icon"></i>
        Facebook
      </button>
    </form>
  );
}

function TaskList({ tasks, onDeleteTask }) {
  return (
    <List>
      {tasks.map((task) => (
        <List.Item key={task.id}>
          <List.Content floated="left">{task.title}</List.Content>
          <List.Content floated="right">
            <Button onClick={() => onDeleteTask(task.id)} negative>
              Delete
            </Button>
          </List.Content>
        </List.Item>
      ))}
    </List>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. Hi
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TodoList />
      </header>
    </div>
  );
}

export default App;
