/* eslint-disable react/jsx-key */
import React from 'react'
import { useSelector } from 'react-redux'
import { nanoid } from 'nanoid'

import Card from '../card/card'
import ErrorMessage from '../error-message/error-message'
import LoadBlock from '../load-block/load-block'
import DownloadBtn from '../download-button/download-button'

import classes from './card-list.module.scss'

const CardList = () => {
  const data = useSelector((state) => state.data.filteredList)
  // const data = useSelector((state) => state.data.ticketList)
  const isError = useSelector((state) => state.data.isError)
  const isComplete = useSelector((state) => state.data.isComplete)
  const ticketCount = useSelector((state) => state.data.ticketCount)
  const isLoading = useSelector((state) => state.data.isLoading)

  const loadBlock = !isComplete ? <LoadBlock /> : null

  if (isLoading && !data.length) {
    return <LoadBlock />
  }

  if (isError > 4 && !data.length) {
    return <ErrorMessage />
  }

  if (!data.length) {
    return <p style={{ textAlign: 'center', gridColumn: 2, fontWeight: 600 }}>Нет подходящих рейсов</p>
  }

  const tickets = data.slice(0, ticketCount).map((el) => {
    return (
      <li className={classes.Card} key={nanoid()}>
        <Card {...el} />
      </li>
    )
  })

  return (
    <>
      {loadBlock}
      <ul className={classes.Clazz}>
        {tickets}
        <DownloadBtn />
      </ul>
    </>
  )
}

export default CardList
