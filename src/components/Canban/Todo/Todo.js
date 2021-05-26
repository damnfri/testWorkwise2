import TodoCss from './Todo.module.css'


const Todo = () => {
    return (
        <div className={TodoCss.main}>
            <div className={check ? css.taskDone : css.task} ref={refs}>
                <p>Task number {props.id}</p>
                <p>Description: {props.title}</p>
                <p>Do until: {props.deadline}.Mai</p>
                <button onClick={deleteTodo}>delete</button>
                <button onClick={done}>Done</button>
            </div>
        </div>
    )
}

export default Todo;