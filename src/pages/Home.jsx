import React from 'react';

import { Categories } from '../components/Categories';
import { PizzaBlock } from '../components/PizzaBlock/PizzaBlock';
import { Skeleton } from "../components/PizzaBlock/Skeleton";
import { Sort } from '../components/Sort';

export const Home = () => {

  const [pizzas, setPizzas] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('https://65367de8bb226bb85dd23593.mockapi.io/pizzas')
      .then((response) => response.json())
      .then((arr) => {
        setPizzas(arr);
        setIsLoading(false);
      });
    window.scrollTo(0, 0);
  }, [])

  return (
    <div className="container">
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {
          isLoading
            ? [new Array(6)].map((_, index) => <Skeleton key={index} />)
            : pizzas.map((element) => (
              <PizzaBlock
                key={element.id}
                {...element} />
            ))
        }
      </div>
    </div>
  )
}
