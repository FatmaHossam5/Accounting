import React from 'react'

export default function Modal({id,title,children,onCancel,className,onSave,onSubmit}) {
  return (
    <>
  
     <div className="modal fade" id={id} data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby={`${id}Label`} aria-hidden="true" >
            <div className="modal-dialog modal-dialog-centered px-modal">
              <div className={`px-card modal-content p-4 ${className} m-auto`}>
                <div className="modal-header">
                  <h4 className="w-100 blue-text modal-title" id={`${id}Label`}>{title} </h4>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={onCancel}></button>
                </div>
                <div  className="modal-body" >
                  {onSubmit? <form onSubmit={onSubmit} >
                  {children}
                  </form>: children}
               
                  </div>
                
              
              </div>
       
            </div>
          </div>
    
    
    
    
    
    </>
  )
}
