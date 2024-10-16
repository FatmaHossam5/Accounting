import React from 'react'
import { Button } from 'react-bootstrap'
import Loader from '../../Template/Loader/Loader'
import { isCancel } from 'axios'

export default function ModalFooter({onCancle,onSubmit,cancleText="Cancel",submitText="Save",isSubmitting=false,className,className2,isCancelDisabled=false,isSaveDisabled=false}) {
  return (
    <>
    
    <div className="d-flex justify-content-end mt-3">

    
      <Button type="button" className={`px-btn btn px-white-btn ${className} me-3 `}  onClick={onCancle} disabled={isCancelDisabled}>{cancleText}</Button>

    
      <Button type="button" className={`px-btn px-blue-btn ${className2}` }  disabled={isSaveDisabled||isSubmitting} onClick={onSubmit} >{isSubmitting?<Loader/>:submitText}</Button>

          </div>
    
    </>
  )
}
