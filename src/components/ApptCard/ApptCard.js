import React, { useState } from 'react'
import ApptForm from '../ApptForm/ApptForm'
import './ApptCard.css'

function ApptCard({ appt, apptList, setApptList }) {
  const [isEditing, setIsEditing] = useState(false)

  const edit = () => {
    setIsEditing(!isEditing)
  }

  const onDelete = (e) => {
    var updatedApptList = [...apptList]
    let apptToDeleteIndex = updatedApptList.findIndex(
      (appointment) => appointment.id === appt.id
    )
    updatedApptList.splice(apptToDeleteIndex, 1)
    setApptList(updatedApptList)
  }

  return (
    <div className='card-container'>
      {!isEditing ? (
        <div className='card-info'>
          <h1>Your Appointment</h1>
          <div className='info-div'>
            <h2>Date: </h2>
            <p>{appt.date}</p>
          </div>

          <div className='info-div'>
            <h2>Time: </h2>
            <p>{appt.time}</p>
          </div>

          <div className='info-div'>
            <h2>Location: </h2>
            <p>{appt.location}</p>
          </div>

          <div className='info-div'>
            <h2>Description: </h2>
            <p className='overflow'>{appt.description}</p>
          </div>
          <div className='card-management-div'>
            <button onClick={edit}>Edit Appointment</button>
            <button id='delete-button' onClick={onDelete}>
              Delete Appointment
            </button>
          </div>
        </div>
      ) : (
        <ApptForm
          appt={appt}
          apptList={apptList}
          setApptList={setApptList}
          isEditing={isEditing}
          setIsEditing={setIsEditing}
        />
      )}
    </div>
  )
}

export default ApptCard
