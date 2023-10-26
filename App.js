import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Note the use of 'Routes' instead of 'Switch'

import TodoList from './TodoList';
import AddTodo from './AddTodo';
import UpdateTodo from './UpdateTodo';
import DeleteTodo from './DeleteTodo';
import './index.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <h1>Todo List App</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<TodoList />} />
            <Route path="/add" element={<AddTodo />} />
            <Route path="/update/:id" element={<UpdateTodo />} />
            <Route path="/delete/:id" element={<DeleteTodo />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
