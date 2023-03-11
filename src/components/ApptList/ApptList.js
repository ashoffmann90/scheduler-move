import React from 'react'
import ApptCard from '../ApptCard/ApptCard'
import './ApptList.css'

function ApptList({ apptList, editAppt, deleteAppt }) {
  return (
    <div className='list-div'>
      {apptList.length ? (
        apptList.map((appt, index) => (
          <ApptCard
            key={index}
            appt={appt}
            apptList={apptList}
            editAppt={editAppt}
            deleteAppt={deleteAppt}
          />
        ))
      ) : (
        <h2>No Appointments</h2>
      )}
    </div>
  )
}

export default ApptList
