import axios from "axios"
import Navcomponent from "../components/Navcomponent"
import { useState } from "react"


const HistoryOfResumes = () => {  

  const [Resume, setResume] = useState([])
  const [loading, setLoading] = useState(true)

  const resumedata=async()=>{
    const data = await axios.post('/api/getresumes')
    const resumes=data.data.resumes;
   
    
    setResume(resumes)
  setLoading(false)
  
  }

let content ;

  if (loading) {
    console.log("iam runing ");
    
    content =<>
    <div>
      <h1 className="text-2xl text-white">
        resumes loading 
      </h1>
    </div>
    </>
  }else if (Resume.length===0){
    content =<>
     
    <h1 className="text-white">no response </h1>
    </>
  }
  else{
    console.log("i am not running ");
    console.log(Resume);
    
   content= Resume.map((resume,index) => (
    <div key={index}>
        <h1 className="text-white"> 
        {resume.latexContent}
        </h1>
      <h1 className="text-white">running</h1>
      </div>
   ))
    
    // content = Resume.map((resume, index) => {
    //   <div key={ index}> 
    //     <h1 className="text-white"> 
    //       {resume.latexContent}
    //     </h1>
    //     <h1 className="text-white">running</h1>
    //   </div>
    // });


  }

  return (<>
    <Navcomponent/> 
  
  <div className='w-full gap-2 flex justify-center items-center h-155 px-10 pt-2 bg-black text-white text-5xl  '>
     
      <h1>
        Generated resumes 
        </h1>
        <br />
    <button onClick={resumedata} className="text-white border-2 text-2xl p-2 cursor-pointer rounded-4xl justify-center items-center"
    

    
    >click me </button>
    </div>
    <div>
      {content}
    </div>
  </>
  )
}

export default HistoryOfResumes
