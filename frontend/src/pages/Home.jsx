import React from 'react'
import WorkoutsSection from '../components/WorkoutsSection'
import WorkoutsForm from '../components/WorkoutsForm'

const Home = () => {
  console.log('rendered')
  return (

    <div className='font-medium text-xl flex items-center max-md:flex-col-reverse md:flex-row md:items-center md:justify-between md:gap-x-52'>
        <WorkoutsSection />
        <WorkoutsForm />
    </div>
  )
}

export default Home