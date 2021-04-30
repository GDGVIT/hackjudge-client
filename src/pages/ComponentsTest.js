import React from 'react'
// import Header from '../components/common-components/Header'
// import ParticipantEvent from '../components/participant-components/ParticipantEvent'
// import UnregEventDetail from '../components/participant-components/UnregEventDetail'
import JoinTeam from '../components/participant-components/JoinTeam'

const ComponentsTest = () => {
  // const event1 = {
  //   eventName: 'Event 1',
  //   maxMembers: 4,
  //   problemStatements: [
  //     "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall",
  //     "orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a gall"
  //   ]
  // }
  // const event2 = {
  //   eventName: 'Event 2',
  //   maxMembers: 4
  // }
  // const event3 = {
  //   eventName: 'Event 3',
  //   maxMembers: 4
  // }
  // const event4 = {
  //   eventName: 'Event 4',
  //   maxMembers: 4
  // }
  // const event5 = {
  //   eventName: 'Event 5',
  //   maxMembers: 4
  // }

  /* ----------------------List of unregistered events------------------ */
  // return (
  //   <>
  //     <Header />
  //     <div className='participant-home'>
  //       <div className='unregistered-events-container'>
  //         <ParticipantEvent event={event1} eventType={0} />
  //         <ParticipantEvent event={event2} eventType={0} />
  //         <ParticipantEvent event={event3} eventType={0} />
  //         <ParticipantEvent event={event4} eventType={0} />
  //         <ParticipantEvent event={event5} eventType={0} />
  //       </div>
  //     </div>
  //   </>
  // )

  /* ---------------------- Unregistered event details ------------------ */
  // return (
  //   <>
  //     <UnregEventDetail event={event1} />
  //   </>
  // )

  return (
    <>
      <JoinTeam />
    </>
  )
}

export default ComponentsTest
