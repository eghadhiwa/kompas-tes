const baseUrl = 'http://localhost:3000/items'

export const fetchItems = () => {
  return async (dispatch) => {
    try {
      
      const response = await fetch(baseUrl)

      const data = await response.json()
      // console.log(data, '<<<< ini dr fetch')
      const groups = data.reduce((group_date, foods) => {
        const date = foods.created_at.split(' ')[0];
        if (!group_date.allTotalCost) group_date.allTotalCost = 0;
        if (!group_date[date]) { group_date[date] = { totalCost: 0, food: [] } }
        group_date[date].food.push(foods)
        group_date[date].totalCost += foods.cost
        group_date.allTotalCost += foods.cost
        return group_date;
      }, {});
      
      // Edit: to add it in the array format instead
      const groupArrays = Object.keys(groups).map((date) => {
        return { date, totalCost: groups[date].totalCost, foods: groups[date].food };
      })
      
      const formatFoods = groupArrays.slice(1).sort((a, b) => new Date(b.date) - new Date(a.date))
      // console.log(groups, '<<<<<<')
      const newDataFoods = {
        allTotalCost: groups.allTotalCost,
        data: formatFoods
      }

      dispatch({
        type: 'FETCH_ITEM',
        payload: formatFoods
      })

      dispatch({
        type: 'FETCH_TOTAL',
        payload: newDataFoods
      })

    } catch (error) {
      console.log(error)
    }
  }
}