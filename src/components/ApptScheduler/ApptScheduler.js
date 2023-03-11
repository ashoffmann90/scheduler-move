import { useState } from 'react'
import ApptList from '../ApptList/ApptList'
import CreateAppt from '../CreateApptForm/CreateApptForm'
import './ApptScheduler.css'

function ApptScheduler() {
  const [apptList, setApptList] = useState([])

  const createAppt = (appointment) => {
    setApptList([...apptList, appointment])
  }

  const editAppt = (appointment) => {
    var updatedApptList = [...apptList]
    let apptToEditIndex = updatedApptList.findIndex(
      (appt) => appt.id === appointment.id
    )
    updatedApptList.splice(apptToEditIndex, 1, appointment)
    setApptList(updatedApptList)
  }

  const deleteAppt = (appointment) => {
    var updatedApptList = [...apptList]
    let apptToDeleteIndex = updatedApptList.findIndex(
      (appt) => appt.id === appointment.id
    )
    updatedApptList.splice(apptToDeleteIndex, 1)
    setApptList(updatedApptList)
  }
  

  return (
    <div className='scheduler-div'>
      <CreateAppt createAppt={createAppt} />
      <ApptList apptList={apptList} editAppt={editAppt} deleteAppt={deleteAppt} />
    </div>
  )
}

export default ApptScheduler
