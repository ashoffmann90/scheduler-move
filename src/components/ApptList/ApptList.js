import React from 'react'
import ApptCard from '../ApptCard/ApptCard'
import './ApptList.css'

function ApptList({ apptList, setApptList }) {
  return (
    <div className='list-div'>
      {apptList.length ? (
        apptList.map((appt, index) => (
          <ApptCard
            key={index}
            appt={appt}
            apptList={apptList}
            setApptList={setApptList}
          />
        ))
      ) : (
        <h2>No Appointments</h2>
      )}
    </div>
  )
}

export default ApptList
