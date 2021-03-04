const initialState = {
  items: [],
  total: {}
}

const fetchItem = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_ITEM':
      return {...state, items: action.payload}
    case 'FETCH_TOTAL':
      return {...state, total: action.payload}
    default:
      return state
  }
}

export default fetchItem