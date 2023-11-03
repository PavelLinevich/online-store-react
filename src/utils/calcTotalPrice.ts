import { CartItemProps } from "../redux/slices/cartSlice"

export const calcTotalPrice = (items: CartItemProps[]) => {
  return items.reduce((sum, obj) => obj.price * obj.count + sum, 0)
}