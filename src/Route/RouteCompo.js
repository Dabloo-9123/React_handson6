import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import Home from '../Component/Home'
import Student from '../Component/Student'
import Contact from '../Component/Contact'
import Store from '../Store/Store'
import Edit from '../Component/Edit'
import Addstudent from '../Component/Addstudent'

function RouteCompo() {
    const[studata,setstudata]=useState([
        {name:"Dabloo",age:23,course:"MEAN",batch:"EA24"},
        {name:"Vimal",age:25,course:"MEAN",batch:"EA24"},
        {name:"Sonu",age:25,course:"MEAN",batch:"EA24"},
        {name:"Monu",age:27,course:"MEAN",batch:"EA24"},
        {name:"Dholu",age:26,course:"MEAN",batch:"EA24"}

    ])
    console.log(studata);
  return (
    <div>
        <BrowserRouter>
      <div className='header'>
      <NavLink to='/' id='nav'>Home</NavLink>
        <NavLink to='/student' id='nav'>Student</NavLink>
        <NavLink to='/contact' id='nav'>Contact Us</NavLink>
      </div>

        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/student' element={
                <Store.Provider value={{data:studata,datafun:setstudata}}>
                    <Student/>
                </Store.Provider>
            }></Route>
            <Route path='/edit' element={
          <Store.Provider value={{data:studata,datafun:setstudata}}>
          <Edit/>
      </Store.Provider>}></Route>
            <Route path='/addstudent' element={
              <Store.Provider value={{data:studata,datafun:setstudata}}>
                <Addstudent/>
              </Store.Provider>
            }></Route>
            <Route path='/contact' element={<Contact/>}></Route>
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default RouteCompo