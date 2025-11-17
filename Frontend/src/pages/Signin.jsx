import React, { useEffect } from 'react'
import Button from '../components/button'
import axios from 'axios'

const Signin = () => {


  return (<>
   <div className='flex p-10 bg-black justify-center items-center'>
     <div className='w-full h-155 bg-black px-10 pt-2 gap-3 text-white text-5xl flex justify-center items-center ' >
    <Button to='/signup' className="border-2 border-white" >Signup</Button> <br />

<h1> this is Singin page </h1>
    </div>
    </div>
   </>
  )
}

export default Signin 
