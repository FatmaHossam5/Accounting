import React from 'react'
import { Button } from 'react-bootstrap'
import Loader from '../../Template/Loader/Loader'

export default function ModalFooter({onCancle,onSubmit,cancleText="Cancel",submitText="Save",isSubmitting=false,className,className2}) {
  return (
    <>
    
    <div className=" px-modal modal-footer mt-3 ms-5">
            <Button type="button" className={`px-btn btn px-white-btn ${className}`}  onClick={onCancle}>{cancleText}</Button>
            <Button type="button" className={`px-btn px-blue-btn ${className2}` }  disabled={isSubmitting} onClick={onSubmit} >{isSubmitting?<Loader/>:submitText}</Button>
          </div>
    
    </>
  )
}
