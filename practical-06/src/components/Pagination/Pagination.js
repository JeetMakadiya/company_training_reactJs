import React from 'react'
import './Pagination.css'

export const Pagination = (props) => {
    return (
        <div className='paginationItemsWrapper'>
            <span>&laquo;</span>
            {props.paginationItems}
            <span>&raquo;</span>
        </div>
    )
}
