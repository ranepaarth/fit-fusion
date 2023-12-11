import React from 'react'
import { BiSolidErrorCircle } from 'react-icons/bi'
import { useWorkoutContext } from '../../componentsRoute'

const FormWorkoutError = () => {
    const {error} = useWorkoutContext()
  return (
    <span
        className={`error-msg-block flex justify-center items-center gap-2 ${
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