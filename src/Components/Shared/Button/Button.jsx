import React from 'react'

export default function Button({onClick,children,target}) {
  return (
    <>
    
    <div className="card-head-btns  ms-auto ">
  <button type="button" className="px-btn px-blue-btn" data-bs-toggle="modal" data-bs-target={target} onClick={onClick}>
 {children}
  </button>
</div>

    </>
  )
}
