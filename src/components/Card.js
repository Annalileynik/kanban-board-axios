import React from 'react';
import ModalUpdate from "./ModalUpdate";
import {Button} from "reactstrap";
import ModalDelete from "./ModalDelete";



const Card = ({card, changePriority, changeStatus, statuses, deleteTask, priorities, editTask}) => {
    const newStatuses = statuses.map(el=>el.title)
    const moveStatus = (id,  direction) => {

        //['todo', 'in progress', 'review', 'done']
        const oldIndex = newStatuses.indexOf(card.status)
        const newIndex = oldIndex + direction
        const newStatus = newStatuses[newIndex]
        console.log(newStatus)
        changeStatus(card._id, newStatus)
    }

    return (
        <div className="card" style={{marginTop:"20px"}}>
            <div className="card-header">
                {card.name}
            </div>
            <ul className="list-group list-group-flush" >
                <li className="list-group-item">{card.description}</li>
                <li className="list-group-item">Status: {card.status}
                    <button
                        disabled={newStatuses[0] === card.status}
                        onClick={()=>moveStatus(card._id, -1)}
                        type="button" className="myBtn btn btn-outline-info">←</button>
                    <button
                        disabled={newStatuses[newStatuses.length - 1] === card.status}
                        onClick={()=>moveStatus(card._id, +1)}
                        type="button" className="myBtn btn btn-outline-info">→</button>
                </li>
                <li className="list-group-item">Priority: {card.priority}
                    <button
                        disabled={+card.priority === priorities[priorities.length-1]}
                        onClick={()=>changePriority(card._id, +card.priority +1)}
                        type="button" className="myBtn btn btn-outline-info">↑</button>

                    <button
                        disabled={+card.priority === priorities[0]}
                        onClick={()=>changePriority(card._id, +card.priority -1)}
                        type="button" className="myBtn btn btn-outline-info">↓</button>
                </li>
               <ModalDelete card={card} deleteTask={deleteTask}/>
                <ModalUpdate priorities={priorities} newStatuses={newStatuses} task={card} editTask={editTask}/>
            </ul>

        </div>
    );
};

export default Card;
