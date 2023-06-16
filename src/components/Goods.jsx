import React from 'react'
import './Goods.css';

const Goods = (props) => {
  return (
    <div className='goodsItem'>

      <h3>{props.title}</h3>
    </div>
  )
}
export default Goods
