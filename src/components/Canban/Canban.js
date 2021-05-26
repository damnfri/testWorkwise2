import Todo from "./Todo/Todo";
import canbancss from './Canban.module.css'
import React from "react";


const Canban = (props) => {

    let todosJsx = props.state.canbans.canbans[0].todos.map(obj => {
        return <Todo id={obj.id} key={obj.key} title={obj.title}/>
    })

    let newTodo = React.createRef()

    let updateTitleTodo = ()=> {
        let text = newTodo.current.value;
        props.updateTitleTodo(text);
    }
    let addTodo = () => {

        props.addTodo(props.id);
    }

    let deleteCanban = () => {
        props.deleteCanban(props.id)
    }

    return (
        <div className={canbancss.main}>
            <p>{props.title}</p>
            {
                todosJsx
            }
            <textarea
                onChange={updateTitleTodo}
                value={props.state.canbans.currentTextareaTodo}
                ref={newTodo}
                placeholder="Your task!"/>
            <button onClick={addTodo}>Add Todo</button>
            <button onClick={deleteCanban}>Delete canban</button>


        </div>
    )
}

export default Canban;