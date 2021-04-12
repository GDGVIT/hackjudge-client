import axios from 'axios'

const createEvent = async (ATOKEN, newEvent, newProblemStatements, newMetrics, eventDate, teamSize) => {
  // Validate event details data
  console.log(teamSize)
  const errors = []
  if (!Array.isArray(newProblemStatements)) {
    errors.push('Problem statements must be an array.')
  }
  if (!(typeof (newEvent) === 'string')) {
    errors.push(`Event name must be a string, it is currently ${newEvent}`)
  }

  try {
    eventDate = Date.parse(eventDate)
    if (isNaN(eventDate)) {
      throw new Error('invalid date')
    }
    console.log(eventDate)
  } catch {
    errors.push('Date cannot be parsed')
  }

  if (!Array.isArray(newMetrics)) {
    errors.push('Metrics must be an array')
  } else {
    for (const element of newMetrics) {
      if (!(typeof (element.maxScore) === 'number')) {
        errors.push(`Metric scores must be a number not ${typeof (element.maxScore)}`)
      }
    }
  }

  if (!(typeof (teamSize) === 'number')) {
    errors.push('The maximum team size must be a number')
  }

  if (errors.length !== 0) {
    console.log('Error: Can\'t create an event with those filthy details!')
    return errors
  }

  const data = {
    eventName: newEvent,
    problemStatements: newProblemStatements,
    metrics: newMetrics,
    dateOfEvent: eventDate,
    maxTeamSize: teamSize
  }

  const config = {
    method: 'post',
    url: 'https://helios-hackjudgeapi.herokuapp.com/event/createEvent',
    headers: {
      Authorization: ATOKEN
    },
    data: data
  }
  console.log(config)
  const response = await axios(config)
  console.log(response)
  return response
}

export default createEvent
