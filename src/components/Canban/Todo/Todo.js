import TodoCss from './Todo.module.css'


//className={check ? css.taskDone : css.task} ref={refs}

const Todo = (props) => {


    return (
        <div className={TodoCss.main}>

            <div >
                <p>Todo</p>
                <p className={TodoCss.desc}>{props.title}</p>

            </div>
        </div>
    )
}

export default Todo;