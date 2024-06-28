import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { CreateStudent, HomePage, StudentOutlet, Students, UpdateStudent } from './pages'
import Test1 from './pages/Test1'
import Testing1 from './pages/Testing1'
import Testing2 from './pages/Testing2'
import Testing3 from './pages/Testing3'
import Testing4 from './pages/Testing4'
import Testing5 from './pages/Testing5'
import Testing from './pages/Testing'




const AppRoute : React.FC= () => {
  return (
    <Routes>
      <Route path="" element = {< Testing/>}>
        <Route path="testing1" element = {< Testing1/>} />
        <Route path="testing2" element = {< Testing2/>} />
        <Route path="testing3" element = {< Testing3/>} />
        <Route path="testing4" element = {< Testing4/>} />
        <Route path="testing5" element = {< Testing5/>} />
      </Route>
      <Route path="test" element = {<Test1 />} />
      <Route path="homepage" element = {<HomePage />}/>
      <Route path="student" element = {<StudentOutlet/>}>
        <Route path="" element = {<Students/>}/>
        <Route path="create-student" element = {<CreateStudent/>}/>
        <Route path="Update-student/: studentID" element = {<UpdateStudent/>}/>
      </Route>
      <Route path='testing/testing1' element={<Testing1/>}></Route>
    </Routes>
  )
}

export default AppRoute