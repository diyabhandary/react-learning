import { useEffect } from "react"
import axios from 'axios'

const Fetchusers = () =>{
  let [users , setUsers] = useState([])

  //! axios => Promised based library
  // Its use => Helps us with the http methods
  // installation => npm i axios

  useEffect(()=>{
    axios.get("https://api.github.com/users") //returns a promise
    .then((response)=>{
      console.log(response); //{data : Array(30)}
      console.log(response.data); //[{..},{..},..]
      setUsers(response.data) //updating the fetched data in state
    })
  },[])
  return(
    <>
    <h2>Users</h2>
    {
      users.map((value,index)=>{
        console.log(value); //{login:"mojombo",id:"1",avatar_url:"http://dfcgvhj.."}
        return <div key={value.id}>
          <h3>{value.login}</h3>
          <img src={value.avatar_url} alt=""/>
        </div>
      })
    }
    </>
  )
}
export default Fetchusers