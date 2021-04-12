import React from 'react'
import PropTypes from 'prop-types'

const CreateEventMetric = ({ metric, removeMetric }) => {
  const handleButtonClick = () => {
    removeMetric(metric.id)
  }

  return (
    <div className='metric'>
      <button onClick={handleButtonClick} className='remove-metric'>X</button>  <span className='metric-name'>{metric.metricName}</span><span>{metric.maxScore}</span>
    </div>
  )
}

CreateEventMetric.propTypes = {
  metric: PropTypes.object,
  removeMetric: PropTypes.func
}

export default CreateEventMetric
