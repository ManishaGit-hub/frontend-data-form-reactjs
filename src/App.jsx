import React,{useState} from 'react'
import PersonalDetails from './components/PersonalDetails'

const App = () => {

    let [personal,setPersonal] = useState({
            email:"",
            firstName:"",
            lastName:"",
            phoneNo:""
        })
  return (
    <>
    <PersonalDetails personal={personal} setPersonalDetails={setPersonal}/>
    </>
  )
}

export default App