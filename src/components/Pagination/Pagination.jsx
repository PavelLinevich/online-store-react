import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import { setCurrentPage } from '../../redux/slices/filterSlice';

export const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.filter.currentPage);

  const onCurrentPage = (event) => {
    dispatch(setCurrentPage(event.selected + 1))
  }

  return (
    <div className={styles.paginate}>
      <ReactPaginate
        className={styles.root}
        breakLabel="..."
        nextLabel=">"
        onPageChange={(event) => onCurrentPage(event)}
        pageRangeDisplayed={4}
        pageCount={3}
        forcePage={currentPage - 1}
        previousLabel="<"
        renderOnZeroPageCount={null}
      />
    </div>
  )
}
