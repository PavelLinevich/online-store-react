import React from 'react';
import axios from 'axios';
import qs from 'qs';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom'

import { setActiveCategory, setFilters } from '../redux/slices/filterSlice'

import { Categories } from '../components/Categories';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Sort } from '../components/Sort';
import { Pagination } from '../components/Pagination/Pagination';
import { SearchContext } from '../App';

export const list = ['rating', 'price', 'title'];
export const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { activeCategory, selected, currentPage } = useSelector((state) => state.filter);

  const selectedList = list[selected];

  const { searchValue } = React.useContext(SearchContext);
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const onChangeCategory = (index) => {
    dispatch(setActiveCategory(index))
  }

  const fetchPizzas = () => {
    setIsLoading(true);
    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const search = searchValue ? `search=${searchValue}` : '';
    axios.get(`https://65367de8bb226bb85dd23593.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${selectedList}&${search}`)
      .then((response) => {
        setPizzas(response.data);
        setIsLoading(false);
      });
  }

  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      // console.log(params);
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
      fetchPizzas();
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
      <div className="content__items">
        {
          isLoading
            ? [new Array(4)].map((_, index) => <Skeleton key={index} />)
            : pizzas.map((element) => (
              <PizzaBlock
                key={element.id}
                {...element} />)
            )
        }
      </div>
      <Pagination />
    </div>
  )
}
