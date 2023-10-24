import React from 'react'
import ReactPaginate from 'react-paginate';

import styles from './Pagination.module.scss'

export const Pagination = ({ setCurrentPage }) => {
  return (
    <div className={styles.paginate}>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => setCurrentPage(event.selected + 1)}
        pageRangeDisplayed={4}
        pageCount={3}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}
