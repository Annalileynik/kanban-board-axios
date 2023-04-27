import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';

function ModalUpdate({priorities, newStatuses, editTask, task}) {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState(task.name)
    const [description, setDescription] = useState(task.description)
    const [status, setStatus] = useState(task.priority)
    const [priority, setPriority] = useState(task.status)
    const toggle = () =>setModal(!modal);


    const updateNewTask = () => {
        const updatedTask = {name, description, status, priority}
        editTask(task._id, updatedTask)
        toggle()
    }

    return (
        <div>
            <button className='myBtn btn btn-outline-warning' onClick={toggle}>
                Update
            </button>

            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader style={{color:"blue"}} toggle={toggle}>Update Task</ModalHeader>
                <ModalBody>
                    <input style={{color:"blue"}} value={name} onChange={(event)=>setName(event.target.value)}/><hr/>
                    <input style={{color:"blue"}} value={description} onChange={(event)=>setDescription(event.target.value)}/>
                    <hr/>
                    <select
                        style={{color:"blue"}}
                        onChange={(event=>setStatus(event.target.value))}
                        value={status} >
                        {newStatuses.map((el, ind)=>
                            <option key={ind}>
                                {el}
                            </option>
                        )}
                    </select><hr/>
                    <select
                        style={{color:"blue"}}
                        onChange={(event=>setPriority(event.target.value))}
                        value={priority} >
                        {priorities.map((el, ind)=>

                            <option key={ind}>
                                {el}
                            </option>
                        )}
                    </select>
                </ModalBody>
                <ModalFooter>
                    <Button onClick={()=>updateNewTask(task._id)} color="primary" >
                        Save
                    </Button>{' '}
                    <Button color="secondary" onClick={toggle}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </div>
    );
}

export default ModalUpdate;
