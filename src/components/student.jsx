
function Student(props){
  return(
    <div>
      <p>Name : {props.name}</p>
      <p>Class : {props.class}</p>
      <p>Roll No : {props.roll_no}</p>
    </div>
  );
} 
// Student.propTypes = {
//   name:propTypes.string,
//   age:propTypes.number,
// }
// Student.defaultProps={
//   name:"Guest",
//   age:0,
//   roll_no:0,
// }
export default Student 