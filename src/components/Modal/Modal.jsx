import React from "react";
import { createPortal } from "react-dom";
import { Backdrop,IconCloseBtn,ModalWindow } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

class Modal extends React.Component {
    // constructor(){
    //     super();
    //     this.state = {
    //         isModalOpen: false
    //     }
    // }  
    
    onEscPressClose = (evt) => {
       if(evt.code === 'Escape'){
this.props.closeModal();
console.log("esc")
        }
    }

    componentDidMount(){
        document.addEventListener('keydown', this.onEscPressClose)
    }

    componentWillUnmount(){
        document.removeEventListener('keydown', this.onEscPressClose)
    }

    closeModalWindow = (evt) => {
        if(evt.target === evt.currentTarget){
           this.props.closeModal()
        }
    }
    render(){
        return createPortal(
               <Backdrop onClick={this.closeModalWindow}>
                <ModalWindow><IconCloseBtn onClick={this.props.closeModal}/>{this.props.children}</ModalWindow>
            </Backdrop>,
            modalRoot  
            )
       
        
    }
}

export default Modal;