import {useState} from "react";
import uuid from "react-uuid";
import { useDispatch } from 'react-redux';
import { addTask } from './../../../redux/tasksSlice';
import api from './../../../api';



function Form (props) {
    const dispatch = useDispatch();

    const [saving, setSaving] = useState(false);
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

    
    //set the state as the user enters a new description inside the <input> field
    const handleDescriptionChange = (event) => {
        setDescription(event.target.value);
        }

    //set the state as the user changes task status inside the <select> field
    const handleStatusChange = (event) => {
        setStatus(event.target.value);
        }

    //submit form
    const handleSubmitForm = (event) => {
        
        if (description === '' ) {
            setErrorMessage(' Please enter a task description');
            
        }   else {

            //add the new task
            const newTask = {
                id: uuid(),
                description: description,
                done: status
            };

            setSaving(true);

            api.post('/tasks', newTask).then((response) => {
                console.log(response.status);
                if (response.status === 201) {
                    dispatch(addTask(newTask));

                    setDescription('');
                    setStatus(false);
                    setErrorMessage(null);
                    setSaving(false);
                }
            });
        }
            
         
        //prevent page reload
        event.preventDefault();    
    }

    return (
        <form onSubmit={handleSubmitForm}>

               {/*conditional display to show saving*/}           
               {saving && (
                <div className='statusText'>Saving New Task</div>
            )}

            {/* Logical && Operator */} 
            {/* https://www.w3schools.com/react/react_conditional_rendering.asp */} 
            {errorMessage && (
                <div className="errorMessage">
                    Invalid Data:
                    {errorMessage}
                </div>
            )}

            <div className="input">
                <label>Description:</label><br />
                <input type="text"
                    maxLength={150}
                    value={description}
                    onChange={handleDescriptionChange}>
                </input>
            </div>

            <div className="input">
                <label>Status:</label><br />
                <select value={status} onChange={handleStatusChange}>
                    <option value={false}>Open</option>
                    <option value={true}>Completed</option>
                    
                </select>
            </div>

            <div>
                <br /><button type="submit">Add</button>

            </div>
        </form>
    );
}
    export default Form;