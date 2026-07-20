import {useState} from 'react'

const Firststate = () => {
//Syntax : let [state , setState] = useState() 

  
      let [fruit , setFruit] = useState("Apple") 
      console.log(fruit);
      let [sport , setSport] = useState("Hockey") 
      let [online , setOnline] = useState(true)
      let [array , setArray] = useState([1,2,3])
      let [movie , setMovie] = useState({
         moviename : "Tiger" , 
         movielanguage : "Hindi",
         moviepart : 1
      })
     
      // console.log(movie); //{moviename: 'Tiger', movielanguage: 'Hindi', moviepart: 1}
      let {moviename , movielanguage , moviepart} = movie  //destructuring


      let changeFruit = ()=>{
        setFruit("Strawberry")
      }

      let changeMovie = ()=>{
        setMovie({moviename : "InsideOut", movielanguage: "English", moviepart:2})
      }
    
  return (
    <>
    <h2>Fruit : {fruit}</h2>
    <button onClick={changeFruit}>Change fruit</button>
    <h2>Sport : {sport}</h2>
    <button onClick={()=>setSport("Cricket")}>Change sport</button>
    <h2>I am planning to watch {moviename} of part {moviepart} in {movielanguage}.</h2>
    <button onClick={changeMovie}>Change movie</button>
    </>
  )
}

export default Firststate