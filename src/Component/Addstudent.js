import React, { useContext } from 'react'
import Store from '../Store/Store';
import { useNavigate } from 'react-router-dom';

function Addstudent() {
  const contexdata =useContext(Store);
  const tempdata={
    name:"",
    age:0,
    course:"",
    batch:""
  }
  const navi=useNavigate()
  function changehandle(e){
    tempdata[e.target.name]=e.target.value;
  }
  function pushHandle(){
    contexdata.data.push(tempdata);
    navi('/student')
  }

  return (
    <>
    <div style={{textDecoration:"underline" ,margin:"auto",fontSize:"2em" ,marginBottom:"1em" ,display:'flex',justifyContent:'center'} }>Addstudent</div>
   <div style={{width:"90%",margin:"auto", textAlign:"center"}}>
   <label id='name'>Name :- </label>
    <input type='text' id='name' name='name' placeholder='Enter name' onChange={changehandle} ></input>
    <br></br>
    <label id='name'>Age :- </label>
    <input type='number' id='name' name='age' placeholder='Enter age ' onChange={changehandle}></input>
    <br></br>
    <label id='name'>Course :- </label>
    <input type='text' id='name' name='course' placeholder='Enter Course' onChange={changehandle}></input>
    <br></br>

    <label id='name'>Batch :- </label>
    <input type='text' id='name' name='batch' placeholder='Enter Batch ' onChange={changehandle}></input>
    <br></br>

   </div>
   <div className='editbuttton'>
    <button onClick={pushHandle}>Add student</button>
    <button onClick={()=>{navi('/student')}}>Back</button>
    </div>
    </>
    
  )
}

export default Addstudent