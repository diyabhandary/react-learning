const Team = (props)=>{

    console.log(props); //{children: 'CompDept - Debugging the future, one line at a time!'}
     
    let {children} = props 

    return (
        <>
        {/* <h2>{props.children}</h2> */}
        <h2>{children}</h2>
        </>
    )
}
export default Team 