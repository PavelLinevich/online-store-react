import React from "react";

type CategoriesProps = {
  activeCategory: number;
  setActiveCategory: (index: number) => void;
}

export const Categories: React.FC<CategoriesProps> = ({ activeCategory, setActiveCategory }) => {
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