import React from 'react'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import moment from 'moment'

export default function CardFood (props) {

  return (
    <div className="col-3">
    <Card className=" cardFlex">
    <Card.Header>{moment(props.item.date).format('LL')}</Card.Header>
    {props.item.foods.map(el => {
      return (
      <ListGroup className="cardTable" key={el.id} variant="flush">
        <div style={{width: "20%"}}>
          <p>{el.created_at.slice(11, 16)}</p>
        </div>
        <div style={{width: "45%", display: "flex"}}>
          <p>{el.name}</p>
        </div>
        <div style={{width: "40%"}}>
          <p> {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(el.cost)}</p>
        </div>
      </ListGroup>
    )
    })}
    <p><b>Total: {new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(props.item.totalCost)} </b></p>
    </Card>
    </div>
  )
}