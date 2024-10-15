import PropTypes from 'prop-types'
function CartItem({ item, dispatch }) {
  return (
    <li className='cart-item'>
      <div className='item-info'>
        <p className='item-name'>{item.name}</p>
        <span className='item-count'>{item.count}x</span>
        <span className='item-price'>@ ${item.price.toFixed(2)}</span>
        <span className='item-total'>
          ${(item.price * item.count).toFixed(2)}
        </span>
      </div>
      <button
        onClick={() => {
          dispatch({
            type: 'remove',
            id: item.id,
          })
        }}
      >
        <img src='images/icon-remove-item.svg' alt='remove item' />
      </button>
    </li>
  )
}
CartItem.propTypes = {
  item: PropTypes.object,
  dispatch: PropTypes.func,
}
export default CartItem
