import React from 'react';

import { Categories } from '../components/Categories';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Sort } from '../components/Sort';
import { Pagination } from '../components/Pagination/Pagination';

export const Home = ({ searchValue }) => {

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  const [activeCategory, setActiveCategory] = React.useState(0);
  const [currentPage, setCurrentPage] = React.useState(1);
  const list = ['rating', 'price', 'title'];
  const [selected, setSelected] = React.useState(list[0]);

  React.useEffect(() => {
    setIsLoading(true);

    const category = activeCategory > 0 ? `category=${activeCategory}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    fetch(`https://65367de8bb226bb85dd23593.mockapi.io/pizzas?page=${currentPage}&limit=4&${category}&sortBy=${selected}&${search}`
    )
      .then((response) => response.json())
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [activeCategory, selected, searchValue, currentPage])


  return (
    <div className="container">
      <div className="content__top">
        <Categories activeCategory={activeCategory} setActiveCategory={(index) => setActiveCategory(index)} />
        <Sort list={list} selected={selected} setSelected={(index) => setSelected(index)} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {
          isLoading
            ? [new Array(6)].map((_, index) => <Skeleton key={index} />)
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
