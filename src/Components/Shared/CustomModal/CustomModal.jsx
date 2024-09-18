import React from 'react'
import { Modal } from 'react-bootstrap'
import ModalFooter from '../ModalFooter/ModalFooter'
export default function CustomModal({ id, title, children, onCancel, className, isOpen, onSubmit }) {

  return (
    <>
      <Modal 
      show={isOpen}
      onHide={onCancel}
      backdrop="static" 
      keyboard={false} 
      aria-labelledby={`${id}Label`}
      centered
      dialogClassName={className}
      id={id} >
        <Modal.Header closeButton>
          <Modal.Title id={`${id}Label`} className='w-100 blue-text'>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {onSubmit ? <form onSubmit={onSubmit} >
            {children}
          </form> : children}
        </Modal.Body>
      
      </Modal>
    </>
  )
}
