import './App.css';
import Canban from "./components/Canban/Canban";
import React from "react";
import {connect} from "react-redux";
import {
    addCanbanActionCreator,
    addTodoActionCreator, deleteCanbanActionCreator,
    updateTitleCanbanActionCreator, updateTitleTodoActionCreator
} from "./components/redux/Canban_reducer";

let mapStateToProps = (state) => {
    return {
        canbanPage: state
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        addCanban: () => {
            let action = addCanbanActionCreator();
            dispatch(action)
        },
        deleteCanban: (num) => {
            let action = deleteCanbanActionCreator(num);
            dispatch(action)
        },
        addTodo: (id) => {
            let action = addTodoActionCreator(id);
            dispatch(action)
        },
        updateTitle: (text) =>{
            let action = updateTitleCanbanActionCreator(text)
            dispatch(action);
        },
        updateTitleTodo: (text) =>{
            let action = updateTitleTodoActionCreator(text)
            dispatch(action);
        }
    }

}

export const AppContainer = connect(mapStateToProps, mapDispatchToProps)(App);


function App(props) {

    let addCanban = () =>{
        props.addCanban()
    }

    let canbanJsx = props.canbanPage.canbans.canbans.map((obj, key) =>{
        return <Canban  updateTitleTodo={props.updateTitleTodo} deleteCanban={props.deleteCanban} state={props.canbanPage} addTodo={props.addTodo} id={obj.id} key={obj.key} title={obj.title}/>
    })
    let newCanban = React.createRef();
    let updateTitle =() =>{
        let text = newCanban.current.value;
        props.updateTitle(text);

    }
    return (
        <div className="App">

            {
                canbanJsx
            }
            <div className="block">
                <textarea
                    onChange={updateTitle}
                    value={props.canbanPage.canbans.currentTextarea}
                    ref={newCanban}
                    placeholder="Title canban!"/>


            <button onClick={addCanban}>NEW BLOCK</button>
            </div>
        </div>
    );
}

export default App;
