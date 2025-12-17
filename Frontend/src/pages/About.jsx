import React from 'react'
import Navcomponent from '../components/Navcomponent'
import PageLayout from '../components/ui/PageLayout'

const About = () => {
  return (
    <PageLayout>
      <Navcomponent />
      <div className='w-full min-h-screen bg-black px-10 pt-20 text-white text-5xl flex justify-center items-center'>
        <h1>this is about </h1>
      </div>
    </PageLayout>
  )
}

export default About
