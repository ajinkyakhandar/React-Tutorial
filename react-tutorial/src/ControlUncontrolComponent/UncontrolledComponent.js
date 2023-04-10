import React, { useRef } from 'react'

const UncontrolledComponent = () => {
    const useRefInput = useRef(null)

    const getData = () => {
        console.log(useRefInput)
    }
  return (
    <div>
        <label>Uncontrolled Component: </label>
        <input className='outline md:outline-1' name="name" ref={useRefInput} onChange={getData} />
    </div>
  )
}

export default UncontrolledComponent
