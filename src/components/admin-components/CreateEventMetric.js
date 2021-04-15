import React from 'react'
import PropTypes from 'prop-types'

const CreateEventMetric = ({ metric, removeMetric }) => {
  const handleButtonClick = () => {
    removeMetric(metric.id)
  }

  return (
    <div className='metric'>
      <span className='metric-name'>{metric.metricName}</span>
      <span className='metric-score'>{metric.maxScore}</span>
      <button onClick={handleButtonClick} className='remove-metric'>
        X
      </button>
    </div>
  )
}

CreateEventMetric.propTypes = {
  metric: PropTypes.object,
  removeMetric: PropTypes.func
}

export default CreateEventMetric
