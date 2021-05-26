import React from "react";

let UPDATE_TITLE = 'UPDATE_TITLE';
let ADD_CANBAN = 'ADD_CANBAN';
let ADD_TODO = 'ADD_TODO';
let DELETE_CANBAN = 'DELETE_CANBAN';
let UPDATE_TITLE_TODO = 'UPDATE_TITLE_TODO';

let initstate = {

    canbans: [{key: 0,
    id: 0,
    title: "test",
    todos: []}],
    currentTextarea: "",
}
let key = 0;
let id = 1;
let idTodo = 0;
let Canban_reducer = (state = initstate, action) => {

    let state_copy = {...state}
    switch (action.type) {
        case ADD_CANBAN:
            let newCanban = {
                key: 0,
                id: 1,
                title: state_copy.currentTextarea,
                todos: []
            }
            state_copy.canbans.push(newCanban);
            state_copy.currentTextarea = '';
            return state_copy;
        case DELETE_CANBAN:
            state_copy.canbans.splice([action.num - 1], 1);

            return state_copy;

        case UPDATE_TITLE:
            state_copy.currentTextarea = action.newTitle;

            return state_copy;
        case UPDATE_TITLE_TODO:
            state_copy.currentTextareaTodo = action.newTitle;

            return state_copy;
        case ADD_TODO:
            let newTodo = {
                key: key++,
                id: id++,
                title: 'state.currentTextarea',
            }


            return {
                ...state,
                canbans: [
                    ...state.canbans.filter(
                        (canban) => {
                            return canban.id !== action.id
                        }),

                    {

                        ...state.canbans.find((canban) => {
                            return canban.id === action.id
                        }),
                        todos: [...state.canbans.find((canban) => {
                            return canban.id === action.id
                        }).todos, {id: idTodo++, key: key++, title: state_copy.currentTextareaTodo}]
                    }
                ],
            }

        // state_copy.canbans[0].todos.push(newTodo);
        // console.log(state_copy.canbans[0].todos)
        // //state.currentTextarea = '';
        // return state_copy;
        default:
            return state;
    }

}

export default Canban_reducer

export const addCanbanActionCreator = () => ({type: ADD_CANBAN})
export const addTodoActionCreator = (id) => ({type: ADD_TODO, id})
export const updateTitleCanbanActionCreator = (newTitle) => ({type: UPDATE_TITLE, newTitle})
export const updateTitleTodoActionCreator = (newTitle) => ({type: UPDATE_TITLE_TODO, newTitle})
export const deleteCanbanActionCreator = (num) => ({type: DELETE_CANBAN, num})

