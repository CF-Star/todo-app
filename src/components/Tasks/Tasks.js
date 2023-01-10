import { useState, useEffect } from 'react'
//import uuid from 'react-uuid';
import Task from './Task/Task.js';
import './Task.scss'
import Form from './Form/Form.js';
import { useSelector, useDispatch } from 'react-redux'
import {clearTasks, setTasks} from './../../redux/tasksSlice'
import api from './../../api';


function Tasks() {
    const [loading, setLoading] = useState(true);
    const tasks = useSelector((state) => state.tasks.list);
    const dispatch = useDispatch()

    useEffect(() => {
        //using api to get tasks
        api.get('/tasks')
        .then((response) => {
            if (response.status === 200) {
                dispatch(setTasks(response.data));
                setLoading(false);
            }
        });
    }, []);

    const handleClearTasks = () => {
        api.delete('/tasks/all').then((response) => {
            if (response.status === 200) {
                dispatch(clearTasks());
                }                
        });        
    }
        
   
    
    return(
        <div>
            <h2>These are the tasks:</h2>
            {/*conditional display to show loading*/}           
            {loading && (
                <div className='statusText'>Loading Your List</div>
            )}
            {tasks.map(
                (task, index) => (
                    <>
                    <div className='tasksDiv'>
                    <Task
                        key={index}
                        task={task}
                      
                    />
                    </div>
                    
                    </>
                )
                
            )}

        <br />

        <button className='clearButton' onClick = {handleClearTasks}>Clear Tasks</button><br/><br/> 
        
        <h2>Add a New Task</h2>
                
        <Form />
        </div>
        
    );
}

export default Tasks;