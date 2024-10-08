import React, { useState } from 'react'
import { DropdownButton, Form } from 'react-bootstrap';

export default function ManageColumns({columns, onColumnToggle}) {
  const [visibleColumns, setVisibleColumns] = useState(columns);
    const[checked,setChecked]=useState(visibleColumns)
    const handleToggle = (columnId) => {
      const updatedColumns = visibleColumns.map((col) =>
        col.id === columnId ? { ...col, visible: !col.visible } : col
      );
      setVisibleColumns(updatedColumns);
      onColumnToggle(updatedColumns);
    };
    const handleSelectAll = () => {
      const allSelected = visibleColumns.every((col) => col.visible);
      const updatedColumns = visibleColumns.map((col) => ({
        ...col,
        visible: !allSelected,
      }));
      setVisibleColumns(updatedColumns);
      onColumnToggle(updatedColumns);
    };
  return (

    <DropdownButton id="dropdown-basic-button" title="Manage Columns">
    <Form.Check
      type="checkbox"
      label="Select All"
      checked={visibleColumns.every((col) => col.visible)}
      onChange={handleSelectAll}
      className="px-3"
    />
    {visibleColumns.map((col) => (
      <Form.Check
        key={col.id}
        type="checkbox"
        label={col.label}
        checked={col.visible}
        onChange={() => handleToggle(col.id)}
        className="px-3"
      />
    ))}
  </DropdownButton>
  )
}
