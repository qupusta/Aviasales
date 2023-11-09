import React from 'react'
import format from 'date-fns/format'

import classes from './card-origin-info.module.scss'

const CardOriginInfo = ({ segments }) => {
  const originTime = format(new Date(segments.date), 'HH:mm')
  const duration = `${Math.floor(segments.duration / 60)}ч ${segments.duration % 60}м`
  const convertDate = new Date(segments.date).setMinutes(new Date(segments.date).getMinutes() + segments.duration)
  const destinationTime = format(new Date(convertDate), 'HH:mm')
  let declination = ' '
  switch (segments.stops.length) {
    case 0:
      declination = ' Без пересадок'
      break
    case 1:
      declination = '1 пересадка'
      break
    case 2:
      declination = '2 пересадки'
      break
    case 3:
      declination = '3 пересадки'
      break
  }
  return (
    <section style={{ margin: '20px auto' }}>
      <div className={`${classes.info}`}>
        <h5>
          {segments.origin} – {segments.destination}
        </h5>
        <h5>В пути</h5>
        <h5>{declination}</h5>
      </div>
      <div className={classes.info}>
        <p>
          {originTime} – {destinationTime}
        </p>
        <p>{duration}</p>
        <p>{segments.stops.join(', ')} </p>
      </div>
    </section>
  )
}

export default CardOriginInfo
