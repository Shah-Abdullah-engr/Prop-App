import React,{ useState } from "react";
function Counter(){
    const [count,setCount]=useState(0);
    const [name,setName]=useState("Guest");
    const [isemployeed,setIsemployeed]=useState(false);
    const [name2,setName2]=useState();
    const [person,setPerson]=useState({Name:'John', age:18});
    const [todo,setTodo]=useState(["task1","task2","task3"]);
   
   
   
   
    const updateAge=()=>{
        setPerson({...person, age:person.age+1});
    }
    const updatelist=()=>{
        setTodo([...todo,name2])
    }

    return(
        <div>
            
            <ul>
                {todo.map((todo,index)=>(
                    <li key={index}>{todo}</li>
                )
                )}
                </ul>            
                <button onClick={updatelist}>Add tasks</button>


           <p>Hello: {person.Name}</p>
            <p>Age :{person.age}</p>
            <button onClick={updateAge}>increase Age</button>



            <p>Hello : {name2}</p>
            <input type="text"
            onChange={(e)=>{setName2(e.target.value)}}
            />


             <p>Name: {name}</p>
            <button onClick={()=>{setName("Shah Abdullah")}}>Update Name </button>


            <p>Isemployed: {isemployeed ? "Yes":"No"}</p>
            <button onClick={()=>{setIsemployeed(!isemployeed)}}>toggle Status  </button>

            <p>{count}</p>
            <button onClick={()=>{ setCount(count+1)}}>Increment</button>
            <button onClick={()=>{ setCount(count-1)}}>Decrement</button>
            <button onClick={()=>{ setCount(0)}}>Reset</button>
        </div>
    )
}
export default Counter