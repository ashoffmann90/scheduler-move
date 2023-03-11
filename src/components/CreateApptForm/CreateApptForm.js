import ApptForm from '../ApptForm/ApptForm'
import './CreateApptForm.css'

function CreateApptForm({ createAppt }) {
  return (
    <div className='form-container'>
      <ApptForm createAppt={createAppt} />
    </div>
  )
}

export default CreateApptForm
