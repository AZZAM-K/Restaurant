import { useReducer, useState } from 'react'
import Cart from './Cart'
import OrderConfirm from './OrderConfirm'
import Dessert from './Dessert'
import './style.css'
import initialProducts from './constants/products'
import dessertsReducer from './constants/reducer'

function App() {
  const [desserts, dispatch] = useReducer(dessertsReducer, initialProducts)
  const [showOrder, setShowOrder] = useState(false)
  const cartItems = desserts.filter(dessert => dessert.count > 0)
  const startNewOrder = () => {
    setShowOrder(false)
    dispatch({
      type: 'new order',
    })
  }
  const handleConfirm = () => {
    setShowOrder(true)
  }
  const orderTotal = getOrderTotal(cartItems)
  return (
    <>
      <main>
        <div className='desserts-list'>
          <h1>Desserts</h1>
          <div className='products-list'>
            {desserts.map(dessert => {
              return (
                <Dessert
                  product={dessert}
                  dispatch={dispatch}
                  key={dessert.id}
                />
              )
            })}
          </div>
        </div>
        <Cart
          items={cartItems}
          orderTotal={orderTotal}
          dispatch={dispatch}
          onConfirm={handleConfirm}
        />
      </main>
      {showOrder && (
        <div className='wrapper'>
          <OrderConfirm
            onNewOrder={startNewOrder}
            items={cartItems}
            orderTotal={orderTotal}
          />
        </div>
      )}
    </>
  )
}

function getOrderTotal(items) {
  let total = 0
  items.forEach(item => {
    total += item.count * item.price
  })
  return total
}

export default App
