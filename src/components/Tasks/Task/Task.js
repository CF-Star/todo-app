import { useDispatch } from 'react-redux';
import { changeTaskStatus, removeTask } from './../../../redux/tasksSlice';
import api from './../../../api';



function Task(props) {
    const dispatch = useDispatch();

    const handleStatusClick = () => {
        const id = props.task.id;
        const updatedTask = {
            ...props.task,
            done: !props.task.done
            };
        api.put('/tasks/' + id, updatedTask).then((response) => {
            if (response.status === 200) {
                dispatch(changeTaskStatus(id));
                }
            });    
    }

    const handleRemoveClick = () => {
        const id = props.task.id;
        api.delete('/tasks/' + id).then((response) => {
            if (response.status === 200) {
                dispatch(removeTask(id));
                }           
        });
    }
    
    return (
        <div className="listDiv">
            <div>
                <h3>{props.task.description}</h3>
            </div>

            <div>
                ID: {props.task.id}
            </div>

            <div>
                Status: {props.task.done 
                ? <span style={{ color: '#A8AC5B' }}>Completed</span>
                :<span style={{ color: '#AE434C' }}>Open</span>
}
</div>
            <div className="btn-toolbar">
                <button  onClick={handleStatusClick}>Change Status</button>
                <div></div>
                <button  onClick={handleRemoveClick}>Remove Task</button>
            </div>
            

        </div>
    );
}

export default Task;