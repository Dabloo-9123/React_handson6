import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Store from '../Store/Store';


function Edit() {
    const navi =useNavigate()
    const data =useLocation().state.index;
    console.log(data)
    const contexdata=useContext(Store)
    const Updatedata={
      name: contexdata.data[data].name,
      age: contexdata.data[data].age,
      course: contexdata.data[data].course,
      batch: contexdata.data[data].batch
    }
    
    // console.log(contexdata);
    function handleChange(e){
      Updatedata[e.target.name]=e.target.value;
      }
    const handleUpdate=()=>{
      contexdata.data[data]=Updatedata;
      navi('/student')
    }
  return (
    <>
    <div style={{textDecoration:"underline" ,margin:"auto",fontSize:"2em" ,marginBottom:"1em" ,display:'flex',justifyContent:'center'} }>Edit Student Data</div>
   <form>
  <div style={{width:"90%",margin:"auto", textAlign:"center"}}>
  <label htmlFor='name'>Name :- </label>
    <input type='text' id='name' name='name' placeholder={contexdata.data[data].name} onChange={handleChange}/>
    <br></br>
    <label htmlFor='age'>Age  :-       </label>
    <input type='number' id='age' name='age' placeholder={contexdata.data[data].age} onChange={handleChange}/>
    
  
  <br></br>

    <label htmlFor='batch'>Batch :- </label>
    <input type='text' id='batch' name='batch' placeholder={contexdata.data[data].batch} onChange={handleChange}/>
    <br></br>

    <label htmlFor='course'>Course :- </label>
    
    <input type='text' id='course' name='course' placeholder={contexdata.data[data].course} onChange={handleChange}/>
    
    </div><br></br>

   <div className='editbuttton'>
   <button onClick={handleUpdate} >Update</button>


<button onClick={()=>{navi('/student')}} >back</button>
   </div>
   </form>
    </>
  )
}

export default Edit