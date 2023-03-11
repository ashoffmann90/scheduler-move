import React, { useState, useId } from 'react'
import './ApptForm.css'

function ApptForm({ appt, createAppt, editAppt, isEditing, setIsEditing }) {
  const apptId = useId()

  const initialCreateData = {
    id: apptId + Date.now(),
    date: '',
    time: '',
    location: '',
    description: '',
  }

  // if editing, populate form with current appt values, otherwise using empty form values for new appt
  const [formData, setFormData] = useState(isEditing ? appt : initialCreateData)

  const onChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  const onSubmit = (e) => {
    e.preventDefault()
    const newAppt = {
      id: formData.id,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      description: formData.description,
    }
    createAppt(newAppt)
    setFormData({
      id: apptId + Date.now(),
      date: '',
      time: '',
      location: '',
      description: '',
    })
  }

  const onEdit = (e) => {
    e.preventDefault()
    const updatedAppt = {
      id: formData.id,
      date: formData.date,
      time: formData.time,
      location: formData.location,
      description: formData.description,
    }
    editAppt(updatedAppt)
    setIsEditing(false)
  }

  return (
    <>
      <h1>{isEditing ? 'Edit' : 'New'} Appointment</h1>
      <form onSubmit={isEditing ? onEdit : onSubmit}>
        <div className='card-form-div'>
          <div className='info-div'>
            <label htmlFor='date'>Date: </label>
            <input
              type='date'
              id='date'
              name='date'
              value={formData.date}
              onChange={onChange}
              required
            />
          </div>

          <div className='info-div'>
            <label htmlFor='time'>Time: </label>
            <input
              type='time'
              id='time'
              name='time'
              value={formData.time}
              onChange={onChange}
              required
            />
          </div>

          <div className='info-div'>
            <label htmlFor='location'>Location: </label>
            <select
              name='location'
              id='location'
              value={formData.location}
              onChange={onChange}
              required
            >
              <option value=''>-----</option>
              <option value='San Diego'>San Diego</option>
              <option value='Portland'>Portland</option>
              <option value='London'>London</option>
              <option value='Orlando'>Orlando</option>
              <option value='Seattle'>Seattle</option>
            </select>
          </div>

          <div className='info-div'>
            <label htmlFor='description'>Description: </label>
            <textarea
              type='text'
              id='description'
              name='description'
              value={formData.description}
              onChange={onChange}
            />
          </div>
        </div>
        <div className='card-management-div'>
          {isEditing ? (
            <button type='submit'>Save Appointment</button>
          ) : (
            <button type='submit' id='create-button'>
              Create Apptointment
            </button>
          )}
          {isEditing && (
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          )}
        </div>
      </form>
    </>
  )
}

export default ApptForm
