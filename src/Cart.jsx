import PropTypes from 'prop-types'
import CartItem from './CartItem'
import { carbonNeutral, emptyCart } from './assets'

function Cart({ items, orderTotal, dispatch, onConfirm }) {
  const totalCount = getTotalCount(items)
  const cartContent =
    totalCount > 0 ? (
      <>
        <ul>
          {items.map(item => {
            return <CartItem key={item.id} item={item} dispatch={dispatch} />
          })}
        </ul>
        <div className='cart-total'>
          <span>Order Total</span>
          <span>${orderTotal}</span>
        </div>
        <div className='carbon-neutral'>
          <img src={carbonNeutral} alt='carbon neutral' />
          <span>
            This is a <b>carbon-neutral</b> delivery
          </span>
        </div>
        <button className='confirm-button' onClick={onConfirm}>
          Confirm Order
        </button>
      </>
    ) : (
      <div className='empty-cart'>
        <img src={emptyCart} alt='empty cart' />
        <p>Your added items will appear here</p>
      </div>
    )
  return (
    <div className='cart'>
      <h2>Your Cart ({totalCount})</h2>
      {cartContent}
    </div>
  )
}

function getTotalCount(items) {
  let total = 0
  items.forEach(item => {
    total += item.count
  })
  return total
}

Cart.propTypes = {
  items: PropTypes.array,
  orderTotal: PropTypes.number,
  dispatch: PropTypes.func,
  onConfirm: PropTypes.func,
}
export default Cart
