import React from 'react';
import Card from "./Card";


const Column = ({status, statuses, tasks, changePriority, changeStatus, deleteTask, priorities, editTask}) => {

    return (

        <div className="col">
            <h3 style={{color: "red"}}> {status.title.toUpperCase()}</h3>
            {tasks.filter(task => task.status === status.title).map(el=>
            <Card
            key={el._id}
            card={el}
            changePriority={changePriority}
            changeStatus={changeStatus}
            statuses={statuses}
            deleteTask={deleteTask}
            priorities={priorities}
            editTask={editTask}
            />
            )}
        </div>
    );
};

export default Column;
