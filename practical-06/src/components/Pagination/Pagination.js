import React from 'react'
import './Pagination.css'

export const Pagination = () => {
    return (
        <div className='paginationItemsWrapper'>
            <span className='prev'>Prev</span>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span>4</span>
            <span className='next'>Next</span>
        </div>
    )
}
