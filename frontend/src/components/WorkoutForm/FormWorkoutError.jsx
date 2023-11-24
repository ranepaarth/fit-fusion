import React from 'react'
import { BiSolidErrorCircle } from 'react-icons/bi'
import { useWorkoutContext } from '../../componentsRoute'

const FormWorkoutError = () => {
    const {error} = useWorkoutContext()
  return (
    <span
        className={`text-red-500 bg-red-200 border-2 border-red-500 p-3 mt-2 rounded flex items-center gap-2 relative ${
          error === null ? "hidden" : "block"
        }`}
      >
        <p className="text-2xl">
          <BiSolidErrorCircle />
        </p>
        <p>{error}</p>
      </span>
  )
}

export default FormWorkoutError