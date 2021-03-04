import './App.css';
import {useSelector, useDispatch} from 'react-redux'
import React, { useState, useEffect } from 'react'
import { fetchItems } from './stores/actions/fetchAction';
import Card from './components/card'
import AddFood from './components/modal'
import Button from 'react-bootstrap/Button'



function App() {
  const {items} = useSelector((state) => state.fetch)
  const total = useSelector((state) => state.fetch.total)
  const [item, setItem] = useState([])
  const [isModal, setIsModal] = useState(false)
  const dispatch = useDispatch()
  // console.log(total, '<<<<')
  // console.log(items, '<<<<<aa')

  useEffect (() =>{
    setItem(items)
  }, [items])

  useEffect (() => {
    dispatch(fetchItems())
  }, [])

  return (
    <div className="App">
      <div className="container">
        <h5>Diari Jajan Februari 2021</h5>
        <h6>Pengeluaran bulan ini {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(total.allTotalCost)} </h6>
        <Button variant="outline-secondary" onClick={() => setIsModal(true)}>Tambah Item</Button>
      </div>
      <div className="container">
      <div className="row ">
        <div className="cards">
        {
          item.map((item, index) => {
            return <Card item={item} key={index} />
          })
        }
        </div>
        {isModal && <AddFood isModal={isModal} setIsModal={(val) => setIsModal(val)}/>}
      </div>
      </div>
    </div>
  );
}

export default App;
