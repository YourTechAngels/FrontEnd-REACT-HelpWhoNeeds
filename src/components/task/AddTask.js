import React from 'react'
import Button from '@material-ui/core/Button'
import NewTaskForm from './NewTaskForm'
import { Link } from "react-router-dom";


function AddTask() {

    // const [addingTaskOn, setAddingTask] = React.useState(false)
    
    const handleAddClick = () => { console.log("It's working!") 
    return <NewTaskForm/> }

    return <div>
        <h1>I need help with...</h1>
        <Link to={'/'}>
        <Button onClick={handleAddClick} variant="contained" color="primary">
            Add Task
        </Button>
        </Link>
    </div>
}

export default AddTask