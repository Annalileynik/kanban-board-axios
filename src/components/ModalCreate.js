import React, {useState} from 'react';
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from 'reactstrap';
import '../App.css';
function ModalCreate({priorities, newStatuses, createTask}) {
    const [modal, setModal] = useState(false);
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [status, setStatus] = useState(priorities[0])
    const [priority, setPriority] = useState(newStatuses[0])
    const toggle = () =>setModal(!modal);


    const createNewTask = () => {
        const newTask = {name, description, status, priority}
        createTask(newTask)
        setName('')
        setDescription('')
        setPriority(priorities[0])
        setStatus(newStatuses[0])
        toggle()
    }
console.log(description)
    return (
        <div>
            <button
                style={{color:"blue"}} className='myBtn btn btn-outline-info' onClick={toggle}>
                 Create Task
            </button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader style={{color:"blue"}} toggle={toggle}>Create Task</ModalHeader>
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
                    <Button onClick={createNewTask} color="primary" >
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

export default ModalCreate;
