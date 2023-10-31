import React from 'react';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { selectFilter, setActiveCategory, setFilters } from '../redux/slices/filterSlice'

import { Categories } from '../components/Categories';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Sort } from '../components/Sort';
import { Pagination } from '../components/Pagination/Pagination';
import { fetchPizzas, selectPizzaData } from '../redux/slices/pizzaSlice';
import { CartEmpty } from '../components/CartEmpty/CartEmpty';

export const list = ['rating', 'price', 'title'];
export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { items, status } = useSelector(selectPizzaData);
  const { activeCategory, selected, currentPage, searchValue } = useSelector(selectFilter);

  const selectedList = list[selected];

  const onChangeCategory = (index) => {
    dispatch(setActiveCategory(index))
  }

  const getPizzas = async () => {
    // setIsLoading(true);
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const search = searchValue ? `search=${searchValue}` : '';


    dispatch(fetchPizzas({ category, search, selectedList, currentPage }))

  }

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      dispatch(
        setFilters({
          ...params,
        })
      )
      isSearch.current = true;
    }
  }, [dispatch])

  React.useEffect(() => {
    window.scrollTo(0, 0);
    if (!isSearch.current) {
      getPizzas();
    }
    isSearch.current = false;
  }, [activeCategory, currentPage, searchValue, selectedList])

  React.useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        selectedList,
        currentPage,
        activeCategory,
      });
      navigate(`?${queryString}`)
    }
    isMounted.current = true;
  }, [activeCategory, currentPage, selectedList, navigate])

  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={activeCategory} setActiveCategory={(index) => onChangeCategory(index)} />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      {
        status === 'error' ?
          <CartEmpty /> :
          (<div className="content__items">
            {
              status === 'loading' ?
                [new Array(4)].map((_, index) => <Skeleton key={index} />) :
                items.map((element) => (
                  <PizzaBlock
                    key={element.id}
                    {...element} />)
                )
            }
          </div>)
      }
      <Pagination />
    </div>
  )
}
