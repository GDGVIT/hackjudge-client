import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'

const Members = ({ members }) => {
  return (
    <div className='review-members-container'>
      <h2>
        Members
      </h2>
      {members.map(member => {
        return (
          <div key={member.AuthAuthId} className='member-card'>
            {member.auth[0].name}
          </div>
        )
      })}
    </div>
  )
}

Members.propTypes = {
  members: PropTypes.array
}

const Abstract = ({ abstract, link, members }) => {
  const [hasLink, setHasLink] = useState(true)
  const hook = () => {
    if (!abstract) {
      abstract = 'The team didn\'t submit an abstract.'
    }
    if (!link) {
      link = 'The team didn\'t submit a link.'
      setHasLink(() => false)
    } else {
      const prefix = 'http://'
      if (link.substr(0, prefix.length) !== prefix) {
        link = prefix + link
      }
    }
  }
  useEffect(hook, [])
  return (
    <div className='team-details'>
      <Members members={members} />
      <div className='review-abstract'>
        <h2 className='review-abstract-title'>Abstract</h2>
        <p className='review-abstract-body'>
          {abstract}
        </p>
      </div>
      <div className='review-link'>
        <h2 className='review-link-title'>Link</h2>
        <div>
          {hasLink && (
            <a className='review-link-actual' href={link} target='_blank' rel='noreferrer noopener'>
              {link}
            </a>
          )}
          {!hasLink && (
            <p>
              The team did not submit a link.
            </p>
          )}
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
