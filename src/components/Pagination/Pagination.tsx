import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ReactPaginate from 'react-paginate';
import styles from './Pagination.module.scss';
import { selectCurrentPage, setCurrentPage } from '../../redux/slices/filterSlice';

export type PaginationProps = {
  currentPage?: number;
  onCurrentPage?: any;
}

export const Pagination: React.FC<PaginationProps> = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);

  const onCurrentPage = (event: any) => {
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
      />
    </div>
  )
}
