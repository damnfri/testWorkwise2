import React from "react";
import {combineReducers, createStore,} from 'redux';
import Canban_reducer from './Canban_reducer'
import Todo_reducer from './Todo_reducer'


let reducers = combineReducers({
    canbans: Canban_reducer,
    // todos: Todo_reducer,
});

let store = createStore(reducers);
export default store;

window.store = store;