const Grandchild=({gcname,setName})=>{

    return(
        <div>
            <p>Grand child</p>
            <p>Name:{gcname}</p>
            <button onClick={()=>{setName("Fahad")}}>Change Name </button>
        </div>
    )
}
export default Grandchild