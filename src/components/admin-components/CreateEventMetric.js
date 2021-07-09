import React from 'react'
import PropTypes from 'prop-types'
import { ImBin2 } from 'react-icons/im'

const CreateEventMetric = ({ metric, removeMetric }) => {
  const handleButtonClick = () => {
    removeMetric(metric.id)
  }

  return (
    <div className='metric'>
      <span className='metric-name'>{metric.metricName}</span>
      <span className='metric-score'>{metric.maxScore}</span>
      <div onClick={handleButtonClick} className='remove-problem-statement'>
        <ImBin2 />
      </div>
    </div>
  )
}

CreateEventMetric.propTypes = {
  metric: PropTypes.object,
  removeMetric: PropTypes.func
}

export default CreateEventMetric
