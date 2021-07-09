import React from 'react'
import PropTypes from 'prop-types'
import { ImBin2 } from 'react-icons/im'

const CreateEventProblemStatement = ({ problemStatement, removePs }) => {
  const handleButtonClick = () => {
    removePs(problemStatement.id)
  }

  return (
    <div className='problem-statement'>
      <div className='ps-text'>
        {problemStatement.ps}
      </div>
      <div onClick={handleButtonClick} className='remove-problem-statement'><ImBin2 /></div>
    </div>
  )
}

CreateEventProblemStatement.propTypes = {
  problemStatement: PropTypes.object,
  removePs: PropTypes.func
}

export default CreateEventProblemStatement
