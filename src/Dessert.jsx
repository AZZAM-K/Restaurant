import PropTypes from 'prop-types'
function Dessert({ product, dispatch }) {
  const className = product.count > 0 ? 'product-image added' : 'product-image'

  return (
    <div style={{ width: 'fit-content' }}>
      <div className={className}>
        <img
          src={`images/image-${product.category.replace(' ', '-')}-desktop.jpg`}
          alt={product.category}
        />
        {product.count === 0 ? (
          <button
            className='dessert-button'
            onClick={() => {
              dispatch({
                type: 'increment',
                id: product.id,
              })
            }}
          >
            <img src='images/icon-add-to-cart.svg' /> Add to Cart
          </button>
        ) : (
          <div className='edit-dessert'>
            <button
              onClick={() => {
                dispatch({
                  type: 'decrement',
                  id: product.id,
                })
              }}
            >
              <img src='images/icon-decrement-quantity.svg' />
            </button>
            <span>{product.count}</span>
            <button
              onClick={() => {
                dispatch({
                  type: 'increment',
                  id: product.id,
                })
              }}
            >
              <img src='images/icon-increment-quantity.svg' />
            </button>
          </div>
        )}
      </div>
      <p className='dessert-category'>{product.category}</p>
      <p className='dessert-name'>{product.name}</p>
      <p className='dessert-price'>${product.price.toFixed(2)}</p>
    </div>
  )
}
Dessert.propTypes = {
  product: PropTypes.object,
  dispatch: PropTypes.func,
}
export default Dessert
