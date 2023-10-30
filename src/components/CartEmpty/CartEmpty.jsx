import React from 'react'
import cartEmptyImg from '../../assets/img/empty-cart.png'
import { Link } from 'react-router-dom'

export const CartEmpty = () => {
  return (
    <div class="cart cart--empty">
      <h2>Cart empty <icon>😕</icon></h2>
      <p>
        Most likely, you haven't ordered pizza yet.<br />
        To order pizza, go to the main page.
      </p>
      <img src={cartEmptyImg} alt="Empty cart" />
      <Link to="/" class="button button--black">
        <span>Come back</span>
      </Link>
    </div>
  )
}
