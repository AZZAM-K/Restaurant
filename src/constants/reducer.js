const dessertsReducer = (desserts, action) => {
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

export default dessertsReducer
