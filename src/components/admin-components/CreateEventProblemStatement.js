import React from 'react'
import PropTypes from 'prop-types'

const CreateEventProblemStatement = ({ problemStatement, removePs }) => {
  const handleButtonClick = () => {
    removePs(problemStatement.id)
  }

  return (
    <div className='problem-statement'>
      <button onClick={handleButtonClick} className='remove-problem-statement'>X</button> {problemStatement.ps}
    </div>
  )
}

CreateEventProblemStatement.propTypes = {
  problemStatement: PropTypes.string,
  removePs: PropTypes.func
}

export default CreateEventProblemStatement
