import React from 'react';
import './Goods.css';



const Goods = (props) => {

  return (
    <div className='goodsItem' >
      <div className="goodsImg">
        <img src={props.img} alt="" />

      </div>
      <div className="GoodsText" >
        <h3>{props.title}</h3>
        <p> Description {props.description}</p>
        <p> Price {props.price}$</p>
        <p> Color {props.color}</p>
        <p> Size {props.size}</p>
        <p> Number {props.number}</p>
        <p>Brend {props.brend}</p>
        <p> Country {props.country}</p>
        <div className="Button">

          {props.action ?
            <button className='action'>-50%</button> : null}

          <button>Buy</button>
        </div>
      </div>


    </div>
  )
}
export default Goods
