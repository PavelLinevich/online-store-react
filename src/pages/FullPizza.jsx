import React from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

export const FullPizza = () => {
  const [pizza, setPizza] = React.useState()
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get('https://65367de8bb226bb85dd23593.mockapi.io/pizzas/' + id)
        setPizza(data);
      } catch (error) {
        alert('Error');
        navigate('/');
      }
    }

    fetchPizza();
  }, [id])

  if (!pizza) {
    return "Downloading..."
  }

  return (
    <div>
      <img src={pizza.imageUrl} alt="pizza_image" />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} $</h4>
    </div>
  )
}
