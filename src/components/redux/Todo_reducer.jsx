//
//
// let ADD_TODO = 'ADD_TODO';
//
//
// let initstate = {
//     canbans: [
//         {key: 0,
//             id: 1,
//             title: 'state.currentTextarea',
//             todos:[{},{}]},
//
//     ],
// }
// let key = 0;
// let id = 1;
//  let Todo_reducer = (state  = initstate,action) =>{
//      let state_copy = {...state}
//      switch (action.type) {
//          case ADD_TODO:
//              let newTodo = {
//                  key: key++,
//                  id: id++,
//                  title: 'state.currentTextarea',
//              }
//
//              state_copy.canbans[0].todos.push(newTodo);
//
//              //state.currentTextarea = '';
//              return state_copy;
//          default:
//              return state;
//      }
//
//
//  }
//
// export default Todo_reducer
//
// export const addTodoActionCreator = () => ({type: ADD_TODO})
