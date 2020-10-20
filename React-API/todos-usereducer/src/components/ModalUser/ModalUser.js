import React, {useState, useContext} from 'react'
import './ModalUser.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import UserTitleContext from '../context/UserTitleContext';

function ModalUser() {
    const {setModalUser, setTitleUser} = useContext(UserTitleContext);

    const valueInputModal = (e) => {
        setTitleUser(e.target.value);
    }// me quede aca con el modal, tengo que pasarle el valor del input 
    //input.target.value y setearlo a titleUser, luego pasarselo a update, hacer cerrar el modal y guardar
    // en title de el componente form


    const closeModal = () => {
        setModalUser(false)
    }


    return (
        <section className="bg-blur">
            <section className="modal">
                <button className="modal-button-x" onClick={closeModal} ><FontAwesomeIcon icon={faTimes}/></button>
                <div className="modal-content">
                    <h2> Hey! Welcome </h2>
                    <p>Please enter your name so we can costumise your To Do List </p>
                    <input type="text" placeholder="Name" onChange={valueInputModal}/> 
                    {/* me quede aca con el modal */}
                    <div className="modal-buttons">
                        <button className="btn-save" onClick={closeModal}>Save</button>
                        <button className="btn-close" onClick={closeModal}>Close</button>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default ModalUser;
