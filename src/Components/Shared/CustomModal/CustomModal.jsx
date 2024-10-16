import classNames from 'classnames'
import React from 'react'
import { Modal } from 'react-bootstrap'
export default function CustomModal({ id, title, children, onCancel, isOpen, onSubmit, showHeader = true,ModalWidth='',headerPadding }) {

  return (
    <>
      <Modal
        show={isOpen}
        onHide={onCancel}
        backdrop="static"
        keyboard={false}
        aria-labelledby={`${id}Label`}
        centered
        dialogClassName={ModalWidth}
        id={id}
        scrollable >
        {showHeader &&

          <Modal.Header closeButton className={classNames(' --bs-modal-header-padding',{
            'custom-padding':headerPadding==='custom',
            'default-padding':headerPadding==='default'
          })}>
            <Modal.Title id={`${id}Label`} className='w-100 blue-text'>
              {title}
            </Modal.Title>
          </Modal.Header>
        }
        <Modal.Body>
          {onSubmit ? <form onSubmit={onSubmit} >
            {children}
          </form> : children}
        </Modal.Body>

      </Modal>
    </>
  )
}
