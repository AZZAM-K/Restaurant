import { useReducer, useState } from 'react'
import Cart from './Cart'
import OrderConfirm from './OrderConfirm'
import Dessert from './Dessert'
import './style.css'
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

function dessertsReducer(desserts, action) {
  switch (action.type) {
    case 'increment': {
      return desserts.map(dessert => {
        if (dessert.id === action.id) {
          return { ...dessert, count: dessert.count + 1 }
        } else {
          return dessert
        }
      })
    }
    case 'decrement': {
      return desserts.map(dessert => {
        if (dessert.id === action.id) {
          return { ...dessert, count: dessert.count - 1 }
        } else {
          return dessert
        }
      })
    }
    case 'remove': {
      return desserts.map(dessert => {
        if (dessert.id === action.id) {
          return { ...dessert, count: 0 }
        } else {
          return dessert
        }
      })
    }
    case 'new order': {
      return desserts.map(dessert => {
        return { ...dessert, count: 0 }
      })
    }
    default: {
      return desserts
    }
  }
}

function getOrderTotal(items) {
  let total = 0
  items.forEach(item => {
    total += item.count * item.price
  })
  return total
}

const initialProducts = [
  {
    id: 1,
    name: 'Waffle with Berries',
    category: 'Waffle',
    price: 6.5,
    count: 0,
  },
  {
    id: 2,
    name: 'Vanilla Bean Crème Brûlée',
    category: 'Crème Brûlée',
    price: 7.0,
    count: 0,
  },
  {
    id: 3,
    name: 'Macaron Mix of Five',
    category: 'Macaron',
    price: 8.0,
    count: 0,
  },
  {
    id: 4,
    name: 'Classic Tiramisu',
    category: 'Tiramisu',
    price: 5.5,
    count: 0,
  },
  {
    id: 5,
    name: 'Pistachio Baklava',
    category: 'Baklava',
    price: 4.0,
    count: 0,
  },
  {
    id: 6,
    name: 'Lemon Meringue Pie',
    category: 'Pie',
    price: 5.0,
    count: 0,
  },
  {
    id: 7,
    name: 'Red Velvet Cake',
    category: 'Cake',
    price: 4.5,
    count: 0,
  },
  {
    id: 8,
    name: 'Salted Caramel Brownie',
    category: 'Brownie',
    price: 4.5,
    count: 0,
  },
  {
    id: 9,
    name: 'Vanilla Panna Cotta',
    category: 'Panna Cotta',
    price: 6.5,
    count: 0,
  },
]
export default App
