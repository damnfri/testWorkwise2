import React from "react";
import {combineReducers, createStore,} from 'redux';
import Canban_reducer from './Canban_reducer'
import Todo_reducer from './Todo_reducer'


let reducers = combineReducers({
    Canbans: Canban_reducer,
    Todos: Todo_reducer,
});

export  let store = createStore(reducers);