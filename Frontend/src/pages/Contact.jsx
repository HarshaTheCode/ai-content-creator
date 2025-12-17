import React from 'react'
import Navcomponent from '../components/Navcomponent'
import PageLayout from '../components/ui/PageLayout'

const Contact = () => {
  return (
    <PageLayout>
      <Navcomponent />
      <div className='w-full min-h-screen flex justify-center items-center px-10 pt-20 bg-black text-white text-5xl'>
        contact page
      </div>
    </PageLayout>
  )
}

export default Contact
