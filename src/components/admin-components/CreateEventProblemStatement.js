import React from 'react'
import PropTypes from 'prop-types'

const CreateEventProblemStatement = ({ problemStatement }) => {
  return (
    <span className='problem-statement'>
      {problemStatement}
    </span>
  )
}

CreateEventProblemStatement.propTypes = {
  problemStatement: PropTypes.string
}

export default CreateEventProblemStatement
