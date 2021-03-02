import React from "react";

const InputForm = ({ labelText, inputValue, onChangeHandler, inputType }) => {
  return (
    <div className="input-field">
      <label>
        <input className="input-box"
          value={inputValue}
          onChange={(event) => onChangeHandler(event.target.value)}
          type={inputType}
          placeholder={labelText}
          onFocus={(e) => e.target.placeholder = ""} 
          onBlur={(e) => e.target.placeholder = labelText} 
        ></input>
      </label>
    </div>
  );
};

export default InputForm;
