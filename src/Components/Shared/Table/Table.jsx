import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import CustomIcon from '../CustomIcon/CustomIcon';
import CustomPagination from '../CustomPagination/CustomPagination';
import SearchBar from '../SearchBar/SearchBar';

export default function Table({ data, columns, title, ...props }) {
  const [filterText, setFilterText] = useState('');

  const filteredItems = data.filter(item => {
      return (
          item.name && item.name.toLowerCase().includes(filterText.toLowerCase())
      );
  });

const customStyles={
  headCells:{
    style:{
      justifyContent:'center',
      textAlign:'center',
    },
  },
  cells:{
    style:{
      justifyContent:'center',
      textAlign:'center'
    }
  }
}
  return (
    <>
      <DataTable title={title}
       columns={columns}
        data={data}
        pagination
        paginationComponentOptions={{
          noRowsPerPage:false
        }}
        paginationComponent={CustomPagination}
        
        {...props}
    sortIcon={<CustomIcon/>}
customStyles={customStyles}
subHeader


selectableRows

      />

    </>
  )
}
