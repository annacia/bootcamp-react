import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

import './AddTodo/style.css'

const AddTodo = ({ dispatch }) => {
    console.log("addtodo");
    let input

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault()
          if (!input.value.trim()) {
            return
          }
          dispatch(addTodo(input.value))
          input.value = ''
        }}
      >
        <input className="input-todo" ref={node => (input = node)} />
        <button className="btn-todo" type="submit">Add Todo</button>
      </form>
    </div>
  )
}

export default connect()(AddTodo)