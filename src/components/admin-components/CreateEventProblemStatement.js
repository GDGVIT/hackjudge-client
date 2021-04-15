import React from 'react'
import PropTypes from 'prop-types'

const CreateEventProblemStatement = ({ problemStatement, removePs }) => {
  const handleButtonClick = () => {
    removePs(problemStatement.id)
  }

  return (
    <div className='problem-statement'>
      <div className='ps-text'>
        {problemStatement.ps}
      </div>
      <button onClick={handleButtonClick} className='remove-problem-statement'>X</button>
    </div>
  )
}

CreateEventProblemStatement.propTypes = {
  problemStatement: PropTypes.object,
  removePs: PropTypes.func
}

export default CreateEventProblemStatement
