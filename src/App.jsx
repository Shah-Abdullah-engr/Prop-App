
// import Student from "./student";
// import Counter from "./counter";
import { useState } from "react";
import Child from "./child";
 

function App(){

  const[name,setName]=useState("Guest");
  const[gcname,setGcname]=useState("Guest");

  const update=()=>{
    setGcname("Shah Abdullah");
  }
  return(
    <>

      <div>
        <p>Name:{name}</p>
        <button onClick={update}>Change</button>
      </div>




   {/* <Student name="Shah Abdullah" class="12th" roll_no={339}/> 
    <Counter/> */}
    <Child gcname={gcname} setName={setName}/>
    </>
    
  );

}
export default App

