import React from 'react';
import TodoList from './Todo/TodoList';
import Context from './context';
import AddTodo from './Todo/AddTodo';

function App() {
  const [todos, setTodos] = React.useState([
    { id: 1, complited: false, title: "Практика йоги" },
    { id: 2, complited: false, title: "Обед" },
    { id: 3, complited: false, title: "Кодинг" },
    { id: 4, complited: false, title: "Высокоинтенсивная тренировка" }
  ]);


  function toggleTodo(id){
setTodos(
  todos.map(todo => {
  if (todo.id === id) {
    todo.completed = !todo.completed
  }
  return todo
})
)
  };

  function removeTodo(id){
    //метод setTodos позволяет изменять State
    setTodos(todos.filter(todo => todo.id !==id))
  }

function addTodo(title){
  setTodos(todos.concat([{
    title,
    id: Date.now(),
    completed: false
  }]))
}

  return (
    <Context.Provider value={{ removeTodo }}>
    <div className='wrapper'>
      <h1>React tutorial</h1>
<AddTodo onCreate={addTodo} />
      {todos.length ? (
      <TodoList todos={todos} onToggle={toggleTodo} /> 
  ) : ( 
      <p>Всё сделано</p>
      )}
      
    </div>
    </Context.Provider>
  );
}

export default App;
