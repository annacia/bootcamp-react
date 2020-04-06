import React from 'react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from '../../reducers'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from './../../containers/VisibleTodoList'
import MenuTodoList from './../../components/Lists/MenuTodoList'

const store = createStore(rootReducer)

const TodoListPage = () => {
    return(
        <Provider store={store}>
                <AddTodo />
                <VisibleTodoList />
                <MenuTodoList />
        </Provider>
    )
};

export default TodoListPage;