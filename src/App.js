import { Categories } from './components/Categories';
import { Header } from './components/Header';
import { PizzaBlock } from './components/PizzaBlock';
import { Sort } from './components/Sort';

import './scss/app.scss';

function App() {
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
            <PizzaBlock title='Mexico' price={395} />
            <PizzaBlock title='Peperoni' price={495} />
            <PizzaBlock title='Hawaii' price={365} />
            <PizzaBlock title='ThreeCheese' price={195} />
            <PizzaBlock title='Barbecue' price={405} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
