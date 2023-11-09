import React from 'react'

import CardOriginInfo from '../card-origin-info/card-origin-info'

import classes from './card.module.scss'

const Card = ({ price, carrier, segments }) => {
  const getCost = (price) => {
    if (price > 999) {
      const costArray = String(price).split('')
      const firstNum = costArray.slice(0, costArray.length - 3).join('')
      const lastNum = costArray.slice(-3, costArray.length).join('')
      return `${firstNum} ${lastNum} Р`
    }
    return `${price} Р`
  }
  return (
    <li className={classes.Card}>
      <div className={classes.Top}>
        <span className={classes.Price}>{getCost(price)}</span>
        <img src={`//pics.avs.io/99/36/${carrier}.png`} alt="logo" />
      </div>
      <CardOriginInfo segments={segments[0]} />
      <CardOriginInfo segments={segments[1]} />
    </li>
  )
}

export default Card
