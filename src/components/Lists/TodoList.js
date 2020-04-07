import React from 'react'
import PropTypes from 'prop-types'
import TodoElement from './../Elements/TodoElement'

import './TodoList/style.css'

const TodoList = ({ todos, toggleTodo }) => (
  <ul className="todo-list">
    {todos.map(todo => (
        <TodoElement 
            key={todo.id} 
            {...todo} onClick={() => toggleTodo(todo.id)} 
        />
    ))}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList