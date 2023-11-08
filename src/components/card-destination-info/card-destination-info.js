import React, { Component } from 'react'
import format from 'date-fns/format'

import classes from './card-destination-info.module.scss'

export default class CardOriginInfo extends Component {
  render() {
    const { segments } = this.props
    const originTime = format(new Date(segments.date), 'HH:mm')
    const duration = `${Math.floor(segments.duration / 60)}ч ${segments.duration % 60}м`
    const convertDate = new Date(segments.date).setMinutes(new Date(segments.date).getMinutes() + segments.duration)
    const destinationTime = format(new Date(convertDate), 'HH:mm')
    let declination = ' Без пересадок'
    if (segments.stops.length == 1) {
      declination = '1 пересадка'
    } else if (segments.stops.length > 2) {
      declination = `${segments.stops.length} пересадки`
    }
    return (
      <section>
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
}
