import React, { useState } from 'react';
import axios from 'axios';

const AddTodo = ({ onAddTodo }) => {
  const [newTodo, setNewTodo] = useState({
    title: '',
    completed: false,
  });

  const handleAddTodo = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/todos', newTodo);
      onAddTodo(response.data); // Add the new todo to the state in the parent component
      setNewTodo({ title: '', completed: false });
    } catch (error) {
      console.error('Error adding a new todo:', error);
    }
  };

  return (
    <div>
      <h2>Add Todo</h2>
      <input
        type="text"
        placeholder="Todo Title"
        value={newTodo.title}
        onChange={(e) => setNewTodo({ ...newTodo, title: e.target.value })}
      />
      <button onClick={handleAddTodo}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
