import axios from 'axios'

const createEvent = (newEvent, newProblemStatements, newMetrics, eventDate, teamSize) => {
  // Validate event details data
  const errors = []
  if (!Array.isArray(newProblemStatements)) {
    errors.push('Problem statements must be an array.')
  }
  if (!(typeof (newEvent) === 'string')) {
    errors.push('Event name must be a string')
  }

  for (const element of newMetrics) {
    if (!(element.maxScore === 'number')) {
      errors.push('Metric scores must be a number')
    }
  }
  if (!(typeof (maxTeamSize) === 'number')) {
    errors.push('The maximum team size must be a number')
  }

  if (errors.length !== 0) {
    console.log('Error: Can\'t create an event with those filthy details!')
    return errors
  }
  // npm pck for err handling

  const data = {
    eventName: newEvent,
    problemStatements: newProblemStatements,
    metrics: newMetrics,
    dateOfEvent: eventDate,
    maxTeamSize: teamSize
  }

  const config = {
    method: 'post',
    url: '{{URL}}/event/createEvent',
    headers: {
      Authorization: '{{ATOKEN}}'
    },
    data: data
  }

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log(error)
    })
}

export default createEvent
