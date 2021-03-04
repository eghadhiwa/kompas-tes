import { fetchItems } from "./fetchAction"

const baseUrl = 'http://localhost:3000/items'

export const addItems = (data) => {
  // console.log(data, '<<<< amasok')
  const payload = {
    name: data.name,
    cost: +data.cost,
    created_at: data.created_at
  }
  return (dispatch, getState) => {
      fetch(baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })
      .then((data) => {
        // console.log(data.json(), '<<<< add')
        return data.json()
      })
      .then(data => {
        dispatch(fetchItems())
      })
      .catch(err => {
        console.log(err)
      })
  }
}