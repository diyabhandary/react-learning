import React from "react"
import { Fragment } from "react"

const CompFrag = ()=>{

    return (
        //1st way 
        // <React.Fragment>
        // <h2>Fragment is used to wrap the elements without creating any extra 
        //     (unnecessary) nodes in DOM tree. </h2>
        // <h3>You cannot use any props except one 'key' prop.</h3>
        // </React.Fragment>

        //2nd way
        // <Fragment>
        // <h2>Fragment is used to wrap the elements without creating any extra 
        //     (unnecessary) nodes in DOM tree. </h2>
        // <h3>You cannot use any props except one 'key' prop.</h3>
        // </Fragment>

        //3rd way 
        <>
        <h2>Empty Fragment is used to wrap the elements without creating any extra 
            (unnecessary) nodes in DOM tree. </h2>
        <h3>You cannot use any props.</h3>
        </>
    )

}

export default CompFrag