import { end, start } from '@popperjs/core';
import React, { useState } from 'react';
import ReactPaginate from 'react-paginate'



export default function CustomPagination({ rowsPerPage, rowCount, onChangePage, currentPage, onChangeRowsPerPage }) {

    const totalPages = Math.ceil(rowCount / rowsPerPage);


    const [rowsPerPageLocal, setRowsPerPageLocal] = useState(rowsPerPage);

    const handleRowsPerPageChange = (event) => {
        const newRowsPerPage = Number(event.target.value);
        setRowsPerPageLocal(newRowsPerPage);
        onChangeRowsPerPage(newRowsPerPage)


    }

    const renderPageNumbers = () => {
        const pageNumbers = [];
    

        const startPage = Math.max(1, currentPage - 1)
        const endPage = Math.min(totalPages - 1, currentPage + 1)
        if (startPage > 1) {
            pageNumbers.push(
                <button key={1}
                    className={`pagination-button ${currentPage === 1 ? 'active' : ''
                        }`}
                    onClick={() => onChangePage(1)}
                >
                    1
                </button>
            )
        }


        if (startPage > 2) {
            pageNumbers.push(<span key='ellipsis1' className='pagination-ellipsis'>
                ...
            </span>)
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button
                    key={i}
                    className={`pagination-button  ${currentPage === i ? 'active' : ''}`}
                    onClick={() => onChangePage(i)}
                >
                    {i}
                </button>
            )
        }
        if (endPage < totalPages - 1) {
            pageNumbers.push(
                <span key='ellipsis2' className='pagination-ellipsis'>
                    ...
                </span>
            )
        }
        if (endPage < totalPages) {
            pageNumbers.push(
                <button key={totalPages} className={`pagination-button ${currentPage === totalPages ? 'active' : ""}`}

                    onClick={() => onChangePage(totalPages)}
                >
                    {totalPages}
                </button>
            )
        }

        return pageNumbers
    }

    const handleDoublePrev = () => {
        const newPage = Math.max(currentPage - 5, 1);
        onChangePage(newPage)
    }
    const handleDoubleNext = () => {
        const newPage = Math.min(currentPage + 5, totalPages);
        onChangePage(newPage)
    }
    return (
        <>
            <div className='pagination-container'>
                <div className='pagination-controls m-auto'>
                    <button className='pagination-button arrow'
                        onClick={handleDoublePrev}
                        disabled={currentPage === 1}
                    >
                        {'<<'}
                    </button>
                    <button className='pagination-button arrow'
                        onClick={() => onChangePage(currentPage - 1)}
                        disabled={currentPage === 1}
                    >
                        {'<'}
                    </button>
                    {
                        renderPageNumbers()
                    }

                    <button className='pagination-button arrow' onClick={() => onChangePage(currentPage + 1)} disabled={currentPage === totalPages}>
                        {'>'}
                    </button>
                    <button className='pagination-button arrow' onClick={handleDoubleNext} disabled={currentPage === totalPages}>
                        {'>>'}
                    </button>
                </div>
                <div className='rows-per-page-selector'>
                    <label>
                        Show:
                    </label>

                    <select value={rowsPerPageLocal}
                        onChange={handleRowsPerPageChange}
                        className='rows-per-page-dropdown select-pagination '>
                        <option value={10}>10</option>
                        <option value={20}>20</option>
                        <option value={30}>30</option>
                        <option value={50}>50</option>
                        <option value={100}>100</option>
                    </select>
                    <span>{`of ${rowCount}`}</span>
                </div>

            </div>


        </>
    )
}
