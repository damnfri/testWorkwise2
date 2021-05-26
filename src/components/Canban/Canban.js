import Todo from "./Todo/Todo";
import canbancss from './Canban.module.css'


const Canban = () =>{
    return (
        <div className={canbancss.main}>
            <Todo/>
        <Todo/>
        </div>
    )
}

export default Canban;