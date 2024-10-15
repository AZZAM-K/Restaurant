import PropTypes from 'prop-types'
function OrderConfirm({ items, orderTotal, onNewOrder }) {
  return (
    <div className='confirm-message'>
      <img src='images/icon-order-confirmed.svg' alt='order confirmed' />
      <h1>Order Confirmed</h1>
      <p>We hope you enjoy your food</p>
      <div className='order-content'>
        <ul>
          {items.map(item => {
            return (
              <li key={item.id}>
                <img
                  src={`images/image-${item.category.replace(
                    ' ',
                    '-'
                  )}-thumbnail.jpg`}
                  alt={item.category}
                />
                <div className='cart-item'>
                  <div className='item-info'>
                    <p className='item-name'>{item.name}</p>
                    <span className='item-count'>{item.count}x</span>
                    <span className='item-price'>
                      @ ${item.price.toFixed(2)}
                    </span>
                  </div>
                  <p className='item-total'>
                    ${(item.price * item.count).toFixed(2)}
                  </p>
                </div>
              </li>
            )
          })}
        </ul>
        <div className='cart-total'>
          <span>Order Total</span>
          <span>${orderTotal}</span>
        </div>
      </div>
      <button className='confirm-button' onClick={onNewOrder}>
        Start New Order
      </button>
    </div>
  )
}
OrderConfirm.propTypes = {
  items: PropTypes.array,
  orderTotal: PropTypes.number,
  onNewOrder: PropTypes.func,
}
export default OrderConfirm
