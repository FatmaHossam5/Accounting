import React, { useState } from 'react'

export default function ManageColumns({columns, visibleColumns, setVisibleColumns}) {
    const[selectedColumns,setSelectedColumns]=useState(columns);
    const[checked,setChecked]=useState(visibleColumns)
    const handleToggleColumn=(column)=>{
        const updatedChecked=checked.includes(column)?checked.filter((col)=>col!==column):[...checked,column];
        setChecked(updatedChecked);
        setVisibleColumns(updatedChecked)
    }
    const handleSelectAll=(e)=>{
    if(e.target.checked){
      setChecked(columns);
      setVisibleColumns(columns)
    }else{
      setChecked([])
      setVisibleColumns([])
    }
    }
  return (


<div className="manage-columns-dropdown">
  <div>
    <input 
    type="checkbox" 
    checked={checked.length===columns.length}
    onChange={handleSelectAll}
     />
     <label > Select All </label>
  </div>
{columns.map((column)=>(
  <div key={column}>
<input type="checkbox" checked={checked.includes(columns)} onChange={()=>handleToggleColumn(column)} />
<label> {column}</label>
  </div>
))}
</div>
  )
}
