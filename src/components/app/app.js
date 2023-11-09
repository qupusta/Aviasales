import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import {
  addSearchId,
  addTickets,
  failDownload,
  completeDownload,
  completeFail,
  performFiltering,
} from '../../reducers/dataReducer/actions'
import Header from '../header/header'
import SideFiltersPanel from '../side-filters-panel/side-filters-panel'
import CardList from '../card-list/card-list'
import Service from '../../service/service'

import classes from './app.module.scss'
import logo from './Logo.svg'

const service = new Service()

const sortTickets = (ticketList, sort) =>
  ticketList
    .slice()
    .sort(({ price: firstPrice, segments: firstSegments }, { price: secondPrice, segments: secondSegments }) => {
      const firstDuration = firstSegments[0].duration + firstSegments[1].duration
      const secondDuration = secondSegments[0].duration + secondSegments[1].duration
      if (sort === 'cheap') {
        return firstPrice - secondPrice
      }
      if (sort === 'speed') {
        return firstDuration - secondDuration
      }
      return firstDuration * 50 + firstPrice - (secondDuration * 50 + secondPrice)
    })

const filterTickets = (ticketList, filterList) => {
  const resultList = []

  if (filterList[0] === 'all') {
    return ticketList
  }

  filterList.forEach((filter) => {
    const newList = ticketList.filter((ticket) => {
      const { segments } = ticket
      if (segments[0].stops.length === filter || segments[1].stops.length === filter) {
        return true
      }
      return false
    })

    resultList.push(...newList)
  })

  return resultList
}

const App = () => {
  const dispatch = useDispatch()
  const isError = useSelector((state) => state.data.isError)
  const filter = useSelector((state) => state.filters.filterList)
  const ticketList = useSelector((state) => state.data.ticketList)
  const sort = useSelector((state) => state.data.sort)
  const searchId = useSelector((state) => state.data.searchId)

  const getTickets = useCallback(() => {
    service
      .getTickets(searchId)
      .then(({ tickets, stop }) => {
        dispatch(addTickets(tickets))
        if (stop) {
          dispatch(completeDownload())
        } else {
          getTickets()
        }
      })
      .catch(() => {
        if (isError > 4) {
          dispatch(completeFail())
        } else {
          dispatch(failDownload())
        }
      })
  }, [searchId, dispatch, isError])

  useEffect(() => {
    service.getSearchId().then((id) => dispatch(addSearchId(id)))
  }, [dispatch])

  useEffect(() => {
    let interval
    clearInterval(interval)
    interval = setTimeout(() => {
      if (searchId !== null) {
        getTickets()
      }
    }, 2000)
  }, [getTickets])

  useEffect(() => {
    const result = sortTickets(filterTickets(ticketList, filter), sort)
    dispatch(performFiltering(result))
  }, [filter, ticketList, sort])
  return (
    <div className={classes['App-wrapper']}>
      <img className={classes.logo} src={logo} />
      <SideFiltersPanel />
      <Header />
      <CardList />
    </div>
  )
}

export default App
