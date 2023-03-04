import ApptForm from '../ApptForm/ApptForm'
import './CreateApptForm.css'

function CreateApptForm({ apptList, setApptList }) {
  return (
    <div className='form-container'>
      <ApptForm apptList={apptList} setApptList={setApptList} />
    </div>
  )
}

export default CreateApptForm
