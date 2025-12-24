import React,{useState} from 'react'
import PersonalDetails from './components/PersonalDetails'

const App = () => {

    let [personal,setPersonal] = useState({
            email:"",
            firstName:"",
            lastName:"",
            phoneNo:""
        })

    const handleSubmit = (e) => {
    e.preventDefault()
    console.log(personal)
  }

  return (
    <div className="container mt-3">
        <form onSubmit={handleSubmit}>
            <PersonalDetails personal={personal} setPersonalDetails={setPersonal}/>
        </form>
    </div>
  )
}

export default App