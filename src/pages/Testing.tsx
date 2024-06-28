import React from 'react'
import { Link } from 'react-router-dom'

const Testing : React.FC = () => {
  return (
    <>
    <h1>
      Testing
    </h1>
     <button title="Testing1" className="Testing">
        <Link to="/testing/testing1" > click! </Link>
    </button>
    
    </>
  )
}

export default Testing