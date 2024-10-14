import React, { useState } from 'react'
import Button from '../Button/Button'
import Table from '../Table/Table'
import Loader from '../../Template/Loader/Loader'
import SearchBar from '../SearchBar/SearchBar';
import ManageColumns from '../ManageColumns/ManageColumns';
export default function CustomPage({ data, columns, title, ButtonName, target, buttonAction,filterOptions }) {
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

  const [selectedColumns, setSelectedColumns] = useState(columns.map(col => col.accessor));
  const [tableColumns, setTableColumns] = useState(columns);
  const handleColumnToggle = (updatedColumns) => {
    setTableColumns(updatedColumns);
  };

  return (
    <>
        <div className="px-content mb-auto mt-3 ">
          <div className="px-card p-4">
            <div className="container-fluid">
              <div className="row">
                <div className="col-12 gx-0">
                  <div className="d-flex ">
                    <div className="page-name p-3  ">
                      <h4>{title}</h4>
                    </div>
                    <div className="card-head-btns  ms-auto   ">
                      <Button target={target} onClick={buttonAction} >
                        {ButtonName}
                      </Button>
                
                    </div>
                  </div>
                  <div className="table-actions  mb-4 ">
                 
                       <SearchBar value={filterText} onChange={(e)=>setFilterText(e.target.value)} filterGroups={filterOptions} onApply={handleApplyFilter}/>
                        <div className='table-btns d-flex justify-content-end'>
                                              </div>
                    <div className="table-btns d-flex justify-content-end ">
                    <ManageColumns columns={tableColumns} onColumnToggle={handleColumnToggle} /> 
                  
                      <button className="px-btn px-gray-btn text-capitalize d-flex align-items-center justify-content-center ms-3">
                        <div className="btn-icon w-20 pe-1">

                          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5.84833 7.48612H5.07083C3.375 7.48612 2 8.86112 2 10.557L2 14.6195C2 16.3145 3.375 17.6895 5.07083 17.6895H14.3458C16.0417 17.6895 17.4167 16.3145 17.4167 14.6195V10.5486C17.4167 8.85779 16.0458 7.48612 14.355 7.48612H13.5692" stroke="#4B4F56" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M9.70964 1.82521V11.8594" stroke="#4B4F56" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M7.27734 4.26562L9.70651 1.82562L12.1365 4.26562" stroke="#4B4F56" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div> export
                      </button>
                    </div>
      
                  </div>
                 
                           <div className="table-responsive px-table-container">
                           <Table columns={columns} data={data}  selectableRows  />
                         </div>
               
              
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
  )
}
