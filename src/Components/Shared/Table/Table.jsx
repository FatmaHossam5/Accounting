import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import CustomIcon from '../CustomIcon/CustomIcon';
import CustomPagination from '../CustomPagination/CustomPagination';
import SearchBar from '../SearchBar/SearchBar';

export default function Table({ data, columns,title,filterOptions, ...props }) {
  const [filterText, setFilterText] = useState('');
  const[filters,setFilters]=useState({});
  const handleApplyFilter=(selectedFilters)=>{
    setFilters(selectedFilters)
  }

  const filteredItems = data?.filter(item => {
    const matchesSearch=item.name&& item.name.toLowerCase().includes(filterText.toLowerCase());
    const matchesFiltetr=Object.keys(filters).every(group=>{
      const selectedOptions = filters[group];
      if(!selectedOptions|| selectedOptions.length===0) return true
return selectedOptions.some(option=>item[group].includes(option.value) )
    });
    return matchesSearch&&matchesFiltetr;
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
    <SearchBar value={filterText} onChange={(e)=>setFilterText(e.target.value)} filterGroups={filterOptions} onApply={handleApplyFilter}/>
  
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
