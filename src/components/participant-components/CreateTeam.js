import React from 'react'

const CreateTeam = ({ creator }) => {
  return (
    <div>
      <form>
        <label>
          Team name <input />
        </label>
        <label>
          Event <input />
        </label>
        <label>
          Members <input />
        </label>
        <label>
          other details <input />
        </label>
      </form>
    </div>

  )
}

export default CreateTeam
