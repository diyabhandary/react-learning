import Authenticated from "./Authenticated"
import Anonymous from "./Anonymous"

const CondRendering = ()=>{

    let online = false 
    let city = "Hyderabad"
    let age = 19

    //!if-else 
    //   if(online == true){
    //      return (
    //         <>
    //         <h2>Welcome to Conditional Rendering.</h2>
    //         <p>User is online</p>
    //         </>
    //      )
    //   } else {
    //        return (
    //         <>
    //         <h2>User is offline.</h2>
    //         </>
    //        )
    //   }

    //! else-if 
    // if(city == "Jaipur"){
    //     return (
    //         <>
    //         <h2>Jaipur</h2>
    //         <p>Jaipur is the capital of India's Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or “Pink City” for its trademark building color. At the center of its stately street grid (notable in India) stands the opulent, colonnaded City Palace complex.
    //              With gardens, courtyards and museums, part of it is still a royal residence.</p>
    //         </>
    //     )
    // } else if(city == "Pune"){
    //     return (
    //         <>
    //         <h2>Pune</h2>
    //         <p>Pune is a sprawling city in the western Indian state of Maharashtra. It was once the base of the Peshwas (prime ministers) of the Maratha Empire, which lasted from 1674 to 1818. It's known for the grand Aga Khan Palace, built in 1892 and now a memorial to Mahatma Gandhi, whose ashes are preserved in the garden. 
    //             The 8th-century Pataleshwar Cave Temple is dedicated to the Hindu god Shiva.</p>
    //         </>
    //     )
    // } else if(city == "Delhi") {
    //     return (
    //         <>
    //         <h2>Delhi</h2>
    //         <p>Delhi, India's capital territory, is a massive metropolitan area in the country's north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people.
    //              Nearby is Chandni Chowk, a vibrant bazaar filled with food carts, sweets shops and spice stalls.</p>
    //         </>
    //     )
    // } else {
    //     return <h2>City did not match.</h2>
    // } 

    //! switch-case 
    //    switch(city){
            
    //          case "Bhopal" : 
    //          return <h2>Bhopal - Capital of Madhya Pradesh</h2>

    //          case "Hyderabad" : 
    //          return <h2>Hyderabad - City of pearls</h2>

    //          case "Mumbai" : 
    //          return <h2>Mumbai - Financial Capital</h2> 

    //          default : 
    //          return <h2>City did not match</h2>
    //    }

    //! short-circuting 
      // return (
      //   <>
      //   <h2>Short-circuiting</h2>
      //   <p>{age > 18  &&  "Eligible to get voter-id."}</p>
      //   </>
      // )
   
    //! Conditionally Rendering the components 
    return (
      <>
      <h2>Rendering components conditionally.</h2>
      {online == true ? <Authenticated/> : <Anonymous/>}
      </>
    )

    //! Ternary Operator (condition ? Stmt1 : Stmt2)
    // return (
    //     <>
    //      <h2>Conditional Rendering</h2>
    //      <p>{online == true ? "User is online" : "User is offline"}</p>
    //     </>
    // )

}
export default CondRendering