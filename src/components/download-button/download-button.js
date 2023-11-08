import React from 'react'
import { useDispatch } from 'react-redux'

import { overflowList } from '../../reducers/dataReducer/actions'

import classes from './download-button.module.scss'

const DownloadBtn = () => {
  const dispatch = useDispatch()
  return (
    <button
      type="button"
      aria-label="Загрузить еще 5 билетов"
      className={classes.btn}
      onClick={() => dispatch(overflowList())}
    >
      Показать еще 5 билетов!
    </button>
  )
}

export default DownloadBtn
