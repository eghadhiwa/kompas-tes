import Modal from 'react-bootstrap/Modal'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import Button from 'react-bootstrap/Button'
import React, {useState} from 'react'
import moment from 'moment'
import {useDispatch} from 'react-redux'
import {addItems} from '../stores/actions/addAction'
import { fetchItems } from '../stores/actions/fetchAction'

export default function AddFood (props) {
  // console.log(props, '<<<<')
  const [item, setItem] = useState({
    name: '',
    cost: null,
    created_at: moment(new Date()).format('YYYY-MM-DD hh:mm:ss')
  })
  const dispatch = useDispatch()

  const handleInputChange = (e) => {
    // console.log(e, '>>>> modal')
    const {value, name} = e.target
    setItem({
      ...item,
      [name]: value
    })
    // console.log(item, '<<<<<')
  } 

  const handleSubmit = () => {
    dispatch(addItems(item))
    props.setIsModal(false)
  }

  return (
    <Modal show={props.isModal}>
        <ModalHeader >
          <ModalTitle>Tambah Entri</ModalTitle>
        </ModalHeader>
        <ModalBody >
          <form>
          <div className="mb-3">
            <label>Nama</label><br/>
            <input type="text" name="name" defaultValue={item.name} onChange={(e) => handleInputChange(e)}/>
          </div>

          <div className="mb-3">
            <label>Harga</label><br/>
            <input type="number" name="cost" defaultValue={item.cost} onChange={(e) => handleInputChange(e)} />
          </div>
        </form>
        </ModalBody>
        <ModalFooter>
        <Button variant="outline-secondary" onClick={() => handleSubmit()}>
            Add
        </Button>
        <Button variant="outline-secondary" onClick={() => props.setIsModal(false)}>
            Close
        </Button>
        </ModalFooter>
    </Modal>
  )
}