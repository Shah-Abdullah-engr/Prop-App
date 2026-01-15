import Grandchild from "./grandchild"
function Child({gcname,setName}){

    return(
        <div>
            <p>Parent Element</p>
        <Grandchild  gcname={gcname} setName={setName}/>
        </div>
    )

    
}
export default Child