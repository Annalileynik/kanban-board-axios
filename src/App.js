import './App.css';
import axios from "axios";
import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.css"
import Column from "./components/Column";

import ModalCreate from "./components/ModalCreate";


const priorities = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

function App() {
    const [statuses, setStatuses] = useState([])
    const [tasks, setTasks] = useState([])

    const getStatuses = () => {
        axios.get('https://expressjs-server.vercel.app/statuses')
            .then((res) =>
                setStatuses(res.data))
            .catch((err) =>
                alert('Statuses not found'))
    }
    const getTasks = () => {
        axios.get('https://expressjs-server.vercel.app/tasks')
            .then((res) =>
                setTasks(res.data))
            .catch(err =>
                alert('Tasks not found'))
    }
    const changePriority = (id, newPriority) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {priority: newPriority})
            .then((res) =>
                getTasks())
            .catch(err =>
                alert('Tasks priority not updated'))
    }
    const changeStatus = (id, newStatus) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, {status: newStatus})
            .then((res) =>
                getTasks())
            .catch(err =>
                alert('Tasks status not updated'))
    }
    const editTask = (id, updatedTask) => {
        axios.patch(`https://expressjs-server.vercel.app/tasks/${id}`, updatedTask)
            .then((res) =>
                getTasks())
            .catch(err =>
                alert('Tasks could not update'))
    }

    useEffect(() => {
        getStatuses()
        getTasks()
    }, [])

    const deleteTask = (id) => {
        axios.delete(`https://expressjs-server.vercel.app/tasks/${id}`)
            .then((res) =>
                getTasks())
            .catch(err =>
                alert('Could not delete task'))
    }

    const createTask = (newTask) => {
        axios.post('https://expressjs-server.vercel.app/tasks', newTask)
            .then(res =>
                getTasks())
            .catch(err =>
                alert("Could not create task"))
    }
    return (
        <div className="App">

            <div className="container text-center">
                <h1 className='board'>Kanban Board</h1>
                <ModalCreate
                    newStatuses={statuses.map(statuses => statuses.status)}
                    priorities={priorities}
                    createTask={createTask}
                />

                <div className="row align-items-start">
                    {statuses.map((status) =>
                        <Column
                            changeStatus={changeStatus}
                            changePriority={changePriority}
                            key={status._id}
                            status={status}
                            tasks={tasks}
                            statuses={statuses}
                            deleteTask={deleteTask}
                            priorities={priorities}
                            editTask={editTask}
                        />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
