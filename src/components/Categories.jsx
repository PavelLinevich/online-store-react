import React from "react"

export function Categories({ activeCategory, setActiveCategory }) {
  const categories = ['All', 'Meat', 'Vegetarian', 'Grill', 'Spicy', 'Close']

  return (
    <div className="categories">
      <ul>
        {
          categories.map((element, index) => (
            <li
              key={index}
              onClick={() => setActiveCategory(index)}
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