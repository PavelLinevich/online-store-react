import React from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';

import { setActiveCategory } from '../redux/slices/filterSlice'

import { Categories } from '../components/Categories';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Sort } from '../components/Sort';
import { Pagination } from '../components/Pagination/Pagination';
import { SearchContext } from '../App';

export const Home = () => {
  const dispatch = useDispatch();

  const { activeCategory, selected } = useSelector((state) => state.filter);

  const list = ['rating', 'price', 'title'];
  const selectedList = list[selected];

  const { searchValue } = React.useContext(SearchContext);
  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [currentPage, setCurrentPage] = React.useState(1);

  const onChangeCategory = (index) => {
    dispatch(setActiveCategory(index))
  }

  React.useEffect(() => {
    setIsLoading(true);

    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    axios.get(`https://65367de8bb226bb85dd23593.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${selectedList}&${search}`)
      .then((response) => {
        setPizzas(response.data);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, currentPage, searchValue, selectedList])


  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={activeCategory} setActiveCategory={(index) => onChangeCategory(index)} />
        <Sort list={list} />
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
      <Pagination currentPage={currentPage} setCurrentPage={(number) => setCurrentPage(number)} />
    </div>
  )
}
