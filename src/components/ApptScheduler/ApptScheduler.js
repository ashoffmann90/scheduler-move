import { useState } from 'react'
import ApptList from '../ApptList/ApptList'
import CreateAppt from '../CreateApptForm/CreateApptForm'
import './ApptScheduler.css'

function ApptScheduler() {
  const [apptList, setApptList] = useState([])

  return (
    <div className='scheduler-div'>
      <CreateAppt apptList={apptList} setApptList={setApptList} />
      <ApptList apptList={apptList} setApptList={setApptList} />
    </div>
  )
}

export default ApptScheduler
