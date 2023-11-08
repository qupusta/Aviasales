import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import activateBox from '../../reducers/filtersReducer/actions'

import classes from './side-filters-panel.module.scss'

const setStatusToMain = (checkboxes, status) =>
  checkboxes.map((checkbox) => {
    if (checkbox.htmlForId === 'all') {
      return {
        ...checkbox,
        checked: status,
      }
    }
    return checkbox
  })

const setStatusForEach = (checkboxes, id) => {
  if (id === 'all') {
    const currentStatus = !checkboxes[0].checked
    const newFilters = checkboxes.map((checkbox) => ({
      ...checkbox,
      checked: currentStatus,
    }))
    return newFilters
  }

  const newFilters = checkboxes.map((checkbox) => {
    if (checkbox.htmlForId === id) {
      const currentStatus = checkbox.checked
      return {
        ...checkbox,
        checked: !currentStatus,
      }
    }
    return checkbox
  })

  return newFilters
}

const checkAllBoxes = (checkboxes, id) => {
  if (id === 'all') {
    return checkboxes
  }

  let withoutMain = true
  checkboxes.forEach((checkbox, indx) => {
    if (indx === 0) {
      return
    }
    if (!checkbox.checked) {
      withoutMain = false
    }
  })

  if (withoutMain) {
    return setStatusToMain(checkboxes, true)
  }
  return setStatusToMain(checkboxes, false)
}

const getActiveBoxList = (checkboxes) => {
  const result = []
  checkboxes.forEach(({ checked, filter }) => {
    if (checked) {
      result.push(filter)
    }
  })

  return result
}

const SideFiltersPanel = () => {
  const dispatch = useDispatch()
  const checkboxes = useSelector((state) => state.filters.checkboxes)

  const onToggle = (e) => {
    const setStatusForEachResult = setStatusForEach(checkboxes, e.target.id)
    const checkboxesRes = checkAllBoxes(setStatusForEachResult, e.target.id)
    const filterListRes = getActiveBoxList(checkboxesRes)

    dispatch(activateBox(checkboxesRes, filterListRes))
  }

  const filterList = checkboxes.map(({ label, checked, htmlForId }) => (
    <li key={htmlForId}>
      <input type="checkbox" id={htmlForId} className={classes.checkbox} checked={checked} onChange={onToggle} />
      <label htmlFor={htmlForId}>{label}</label>
    </li>
  ))

  return (
    <div className={classes['Side-panel__wrapper']}>
      <ul className={classes['Side-panel__input-list']}>
        <span className={classes['Side-panel__description']}> Количество пересадок </span>
        {filterList}
      </ul>
    </div>
  )
}

export default SideFiltersPanel
