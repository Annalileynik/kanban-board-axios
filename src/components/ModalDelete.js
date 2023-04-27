import React, {useState} from 'react';
import {Button, Modal, ModalFooter, ModalHeader} from 'reactstrap';

function ModalCreate({card, deleteTask}) {
    const [modal, setModal] = useState(false);

    const toggle = () =>setModal(!modal);


    const deletedTask = () => {
        deleteTask(card._id)
        toggle()
    }

    return (
        <div>
            <button
                style={{color:"blue"}} className='myBtn btn btn-outline-danger' onClick={toggle}>
                Delete
            </button>
            <Modal isOpen={modal} toggle={toggle}>
                <ModalHeader style={{color:"blue"}} toggle={toggle}>Delete Task</ModalHeader>

                <ModalFooter>
                    <Button onClick={()=>deletedTask(card._id)} color="primary" >
                        Delete
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
