import React from 'react'
import PropTypes from 'prop-types'

const InputForm = ({ labelText, inputValue, onChangeHandler, inputType }) => {
  return (
    <label>
      <div className='input-label-text'>
        {labelText}
      </div>
      <input
        className='input-box'
        value={inputValue}
        onChange={(event) => onChangeHandler(event.target.value)}
        type={inputType}
        placeholder={labelText}
        onFocus={(e) => { e.target.placeholder = '' }}
        onBlur={(e) => { e.target.placeholder = labelText }}
      />
    </label>
  )
}

InputForm.propTypes = {
  labelText: PropTypes.string,
  inputValue: PropTypes.string,
  onChangeHandler: PropTypes.func,
  inputType: PropTypes.string
}

export default InputForm
