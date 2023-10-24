import React from 'react'

import styles from './Search.module.scss'
import { SearchContext } from '../../App';

export const Search = () => {

  const { searchValue, setSearchValue } = React.useContext(SearchContext);

  return (
    <input
      value={searchValue}
      onChange={(event) => setSearchValue(event.target.value)}
      className={styles.input}
      placeholder='Pizza search ...' />
  )
}
