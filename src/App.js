import React from "react"

import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { PizzaBlock } from './components/PizzaBlock';
import { Sort } from './components/Sort';

// import pizzas from './assets/pizzas.json'

import './scss/app.scss';

export function App() {

  const [pizzas, setPizzas] = React.useState([]);

  React.useEffect(() => {
    fetch('https://65367de8bb226bb85dd23593.mockapi.io/pizzas')
      .then((response) => response.json())
      .then((arr) => {
        setPizzas(arr);
      })
  }, [])

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
          <div className="content__top">
            <Categories />
            <Sort />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
              pizzas.map((element, index) => (
                <PizzaBlock
                  key={index}
                  {...element} />
              ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}
