import React, { useContext } from 'react'
import Store from '../Store/Store';
import { NavLink } from 'react-router-dom';
function Student() {
const contextdata=useContext(Store);
console.log(contextdata)
  return (
    <>
   <div className='stu_header'>
   <h2 style={{textDecoration:"underline",}}>Studen data</h2>
   <button ><NavLink to={'/addstudent'} className='but'>Add student</NavLink></button>
   </div>
     <table>
        <thead>
            <tr>
                <th>Name</th>
                <th>Age</th>
                <th>Batch</th>
                <th>Course</th>
                <th>Change</th>

            </tr>
        </thead>
        <tbody>
             
            {
            contextdata.data.map((item,index)=>{
                // console.log(index)
                return(
                    <>
                    <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.age}</td>
                        <td>{item.batch}</td>
                        <td>{item.course}</td>
                        <td ><NavLink to='/edit' state={{index}}>Edit</NavLink></td>

                    </tr>
                    </>
                )
            })
        }
        </tbody>
     </table>
    </>
  )
}

export default Student