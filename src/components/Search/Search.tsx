import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setSearchValue } from '../../redux/slices/filterSlice'

import styles from './Search.module.scss';

export const Search: React.FC = () => {
  const dispatch = useDispatch();

  const searchValue = useSelector((state: any) => state.filter.searchValue);

  return (
    <input
      value={searchValue}
      onChange={(event) => dispatch(setSearchValue(event.target.value))}
      className={styles.input}
      placeholder='Pizza search ...' />
  )
}
