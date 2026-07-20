import { useFetchApi } from './useFetchApi"

const Users = () => {
  let {apiData, loading} = useFetchApi("https://fakestoreapi.com/products")

  console.log(apiData); //[{..},{..},..]

  if(loading){
    return <h2>Loading................</h2>
  }

  return(
    <div>Users</div>
  )
}

export default Users 
