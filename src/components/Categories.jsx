import { useState } from "react"

export function Categories() {
  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Close']

  const [activeCategory, setActiveCategory] = useState(0);

  const onClickCategory = (index) => {
    setActiveCategory(index);
  }

  return (
    <div className="categories">
      <ul>
        {
          categories.map((element, index) => (
            <li
              key={index}
              onClick={() => { onClickCategory(index) }}
              className={activeCategory === index ? 'active' : ''}
            >
              {element}
            </li>
          ))
        }
      </ul>
    </div>
  )
}