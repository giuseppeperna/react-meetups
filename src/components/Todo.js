import { useState }from 'react';
import Modal from './Modal';
import Backdrop from './Backdrop';

function Todo( props ) {
    const [ showModal, setShowModal ] = useState(false);

    function deleteHandler() {
        setShowModal(true);
    }
    function closeModal() {
        setShowModal(false);
    }
    return (
        <div className="card">
            <h2>{props.title}</h2>
            <div className="actions">
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            { showModal && <Modal onClick={closeModal} onConfirm={closeModal}/> }
            { showModal && <Backdrop onClick={closeModal}/> }
        </div>
    );
}

export default Todo;