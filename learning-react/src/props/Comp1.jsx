const Comp1 = (props) =>{
  console.log(props);//{student:'Roshni', rollno:15, member:true, task:null,project:undefined}

   let { student, rollno, member, task, project } = props; //destructuring
  return(
    <>
    <h2>Comp1</h2>
    <h3>Student name: {student}</h3>
    <h3>Roll No: {rollno}</h3>
    <h3>Library membership: {member == true ? "Active member" : "Membership expired"}</h3>
    <h3>Task: {task == null ? "Task not done" : "Task done"}</h3>
    <h3>Project: {project == undefined ? "Project not assigned" : "Project Started"}</h3>
    </>
  )
}
export default Comp1
