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
        <IndexHeader title="React Bootcamp" subtitle="@WoMakersCode" />
        <Provider store={store}>
            <div className="todo-list">
                <h3>To-Do List com Redux</h3>
                <AddTodo />
                <MenuTodoList />
                <VisibleTodoList />
            </div>
        </Provider>
        </>
    )
};

export default TodoListPage;