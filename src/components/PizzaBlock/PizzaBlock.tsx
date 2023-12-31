import React from "react";
import { useSelector, useDispatch } from 'react-redux';
import { CartItemProps, addItem, selectCartItemById } from "../../redux/slices/cartSlice";
import { Link } from "react-router-dom";

type PizzaBlockProps = {
  id: string;
  imageUrl: string;
  title: string;
  types: number[];
  sizes: number[];
  price: number;
}

export const PizzaBlock: React.FC<PizzaBlockProps> = ({ id, imageUrl, title, types, sizes, price/*, category, rating */ }) => {
  const dispatch = useDispatch();
  const typeName = ['thin', 'traditional'];
  const cartItem = useSelector(selectCartItemById(id))
  const [activePizzaType, setActivePizzaType] = React.useState(0);
  const [activePizzaSize, setActivePizzaSize] = React.useState(0);

  const addedCount = cartItem ? cartItem.count : 0
  const onClickAdd = () => {
    const item: CartItemProps = {
      id,
      title,
      price,
      imageUrl,
      type: typeName[activePizzaType],
      size: sizes[activePizzaSize],
      count: 0,
    }
    dispatch(addItem(item))
  }
  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <Link to={`/pizza/${id}`} key={id}>
          <img
            className="pizza-block__image"
            src={imageUrl}
            alt="Pizza"
          />
          <h4 className="pizza-block__title">{title}</h4>
        </Link>
        <div className="pizza-block__selector">
          <ul>
            {
              types.map((type, index) => (
                <li
                  key={index}
                  className={activePizzaType === index ? 'active' : ''}
                  onClick={() => setActivePizzaType(index)}
                >
                  {typeName[type]}
                </li>)
              )
            }
          </ul>
          <ul>
            {
              sizes.map((size, index) => (
                <li
                  key={index}
                  className={activePizzaSize === index ? 'active' : ''}
                  onClick={() => setActivePizzaSize(index)}
                >
                  {size} cm.
                </li>))
            }
          </ul>
        </div>
        <div className="pizza-block__bottom">
          <div className="pizza-block__price">от {price} $</div>
          <button
            className="button button--outline button--add"
            onClick={onClickAdd}
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="white"
              />
            </svg>
            <span>Add</span>
            {addedCount > 0 && <i>{addedCount}</i>}
          </button>
        </div>
      </div>
    </div>
  )
}