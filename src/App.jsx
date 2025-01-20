import React, { useState } from 'react';

const App = () => {
  const [data, setData] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (data.trim() === '') return;
    setTodos((prev) => [...prev, { id: Date.now(), task: data }]);
    setData('');
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div className="my-10">
      <div className="flex items-center justify-center space-x-4 p-4">
        <input
          type="text"
          value={data}
          placeholder="Enter your text here"
          onChange={(e) => setData(e.target.value)}
          className="w-80 px-4 py-2 text-base border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
          onClick={addTodo}
          className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Submit
        </button>
      </div>
      <div className="mt-6">
        {todos.map((todo) => (
          <div
            key={todo.id}
            className="flex justify-between items-center px-4 py-2 bg-gray-100 rounded-lg shadow-md mb-2"
          >
            <span>{todo.task}</span>
            <button
              onClick={() => deleteTodo(todo.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
