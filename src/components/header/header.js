import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import activateBtn from '../../reducers/tabsReducer/actions'
import { changeSortValue } from '../../reducers/dataReducer/actions'

import classes from './header.module.scss'

const onClickActive = (tabs, id) =>
  tabs.map((tab) => {
    if (tab.id === id) {
      return {
        ...tab,
        isActive: true,
      }
    }
    return {
      ...tab,
      isActive: false,
    }
  })

const Header = () => {
  const dispatch = useDispatch()
  const tabs = useSelector((state) => state.tabs)

  const onToggle = (e) => {
    dispatch(activateBtn(onClickActive(tabs, e.target.id)))
    dispatch(changeSortValue(e.target.id))
  }

  const buttonsList = tabs.map(({ label, aria, id }) => {
    return (
      <div className={classes.wrap} key={id}>
        <input id={id} name="tab" type="radio" aria-label={aria} onClick={onToggle} />
        <label className={classes['Header__label']} htmlFor={id}>
          <span className={classes['Header__input-description']}>{label}</span>
        </label>
      </div>
    )
  })
  return <form className={classes['Header-tabs']}>{buttonsList} </form>
}

export default Header
