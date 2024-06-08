import { useEffect, useState } from 'react'
import './App.css'

function App() {

  const [student, setStudent] = useState<string>();

  useEffect(() => {
    setStudent("hello");
  },[]);
  return (
    <>
      <div>
        {student}
      </div>
    </>
  )
}

export default App
