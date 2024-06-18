import React from 'react'
import { Link } from 'react-router-dom'

const Students : React.FC= () => {
  return (
    <>
    <button title="CreateStudent">
        <Link to="/student/create-student"> Create-Student Details </Link>
    </button>
    </>
  )
}

export default Students