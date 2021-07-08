import React from 'react'
import PropTypes from 'prop-types'

const Members = ({ members }) => {
  return (
    <div>
      <h1>
        Members
      </h1>
      {members.map(member => {
        return (
          <li key={member.AuthAuthId}>
            {member.auth[0].name}
          </li>
        )
      })}
    </div>
  )
}

Members.propTypes = {
  members: PropTypes.array
}

const Abstract = ({ abstract, link, members }) => {
  if (!abstract) {
    abstract = 'The team didn\'t submit an abstract.'
  }
  if (!link) {
    link = 'The team didn\'t submit a link.'
  }
  return (
    <div className='team-details'>
      <Members members={members} />
      <div className='review-abstract'>
        <h1 className='review-abstract-title'>Abstract</h1>
        <div className='review-abstract-body'>
          {abstract}
        </div>
      </div>
      <div className='review-link'>
        <h1 className='review-link-title'>Link</h1>
        <div>
          <a>
            {link}
          </a>
        </div>
      </div>
    </div>
  )
}

Abstract.propTypes = {
  abstract: PropTypes.string,
  link: PropTypes.string,
  members: PropTypes.array
}

const ReviewTeamDetails = ({ team }) => {
  return (
    <div className='team-details'>
      <Abstract abstract={team.abstract} link={team.link} members={team.existingMembers} />
    </div>
  )
}

ReviewTeamDetails.propTypes = {
  team: PropTypes.object
}

export default ReviewTeamDetails
