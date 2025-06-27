import PropTypes from 'prop-types'
import { cartIcon, plusIcon, minusIcon } from './assets'

function Dessert({ product, dispatch }) {
  const className = product.count > 0 ? 'product-image added' : 'product-image'

  return (
    <div style={{ width: 'fit-content' }}>
      <div className={className}>
        <img src={product.img} alt={product.category} />
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
            <img src={cartIcon} /> Add to Cart
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
              <img src={minusIcon} />
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
              <img src={plusIcon} />
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
