import React,{useState} from 'react'
import PersonalDetails from './components/PersonalDetails'
import ExperienceList from './components/ExperienceList'
import {v4 as uuid} from "uuid"
import { submitForm } from './utils/submitForm'
import {useNavigate} from 'react-router-dom'
import { delay } from './utils/delay'

const App = () => {
    const navigate = useNavigate()

    let [personal,setPersonal] = useState({
            email:"",
            firstName:"",
            lastName:"",
            phoneNo:""
        })

        const [experiences,setExperiences] = useState([
            {
             id:uuid(),
             company:"",
             startDate:"",
             endDate:"",
             years:0 
            }
        ])
        
        const [loading,setLoading] = useState(false);

    const handleSubmit = async(e) => {
                        e.preventDefault();
                        setLoading(true);

                        const payload={
                                personalDetails:personal,
                                professionalExperience:experiences
                                        };
                        try{
                            const result = await submitForm(payload)

                            await delay(4000)
                            
                            navigate('/success',{
                                state:{referenceId:result.referenceId},
                        })
                    }
                    catch(error){
                            alert("submission failed");
                    }
                    finally{
                            setLoading(false);
                    }
  
                }

  return (
    <div className="container mt-3">
        <h1 className="text-center mb-4">Candidate Information Submission Form</h1>
        <form onSubmit={handleSubmit}>
            <PersonalDetails personal={personal} setPersonalDetails={setPersonal}/>
            <ExperienceList experiences={experiences} setExperiences={setExperiences}/>
            <div>
            <button type="submit" className="btn btn-primary mt-3" disabled={loading}>{loading?"Submitting...":"Submit"}</button>
            </div>
        </form>
    </div>
  )
}

export default App