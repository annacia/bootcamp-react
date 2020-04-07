import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../../reducers'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from './../../containers/VisibleTodoList'
import MenuTodoList from './../../components/Lists/MenuTodoList'
import IndexHeader from '../../components/Headers/IndexHeader'

import './style.css'

const store = createStore(rootReducer)

const TodoListPage = () => {
    return(
        <>
        <IndexHeader page_title="To-Do List com Redux" />
        <Provider store={store}>
            <div className="todo-list">
                <AddTodo />
                <MenuTodoList />
                <VisibleTodoList />
            </div>
        </Provider>
        </>
    )
};

export default TodoListPage;