import React, { useState } from 'react'

export default function ManageColumns({columns, onChange}) {
    const[selectedColumns,setSelectedColumns]=useState(columns);
    const handleToggleColumn=(column)=>{
        const updatedColumns=selectedColumns.map(col=>col.name===column.name?{...col,visible:!col.visible}:col);
        setSelectedColumns(updatedColumns);
        onColumnsChange(updatedColumns.filter(col=>col.visible))
    }
    const handleSelectAll=()=>{
        const areAllSelected=selectedColumns.every(col=>col.visible);
        const updatedColumns=selectedColumns.map(col=>({
            ...col,
            visible:!areAllSelected
        }));
        setSelectedColumns(updatedColumns);
        onColumnsChange(updatedColumns.filter(col=>col.visible))
    }
  return (
//     <div>

//         <div>
//             <input
//             type='checkbox'
//             checked={selectedColumns.every(col=>col.visible)}
//             onChange={handleSelectAll}
//             />
//         </div>
// {selectedColumns.map((col)=>(
//     <div key={col.name}>
//         <input
//         type='checkbox'
//         checked={col.visible}
//         onChange={()=>handleToggleColumn(col)}
        
//         />
//         <label >{col.label}</label>
//     </div>
// ))}


//     </div>

<div className="dropdown-menu">
<label>
  <input
    type="checkbox"
    onChange={(e) => onChange('all', e.target.checked)}
    checked={selectedColumns.length === columns.length}
  />
  Select All
</label>
{columns.map((col) => (
  <label key={col.accessor}>
    <input
      type="checkbox"
      checked={selectedColumns.includes(col.accessor)}
      onChange={() => onChange(col.accessor)}
    />
    {col.name}
  </label>
))}
</div>
  )
}
