import { useState } from "react"

export const useFetchApi = (url)=>{
  
  let [apiData, setApidata] = useState([])
  let [loading, setLoading] = useState(false)

  async function getData() {
    setLoading(true) //fectching of data started
    try{
      let responce = await fetch(url)
      let data = await Response.json()
      setApidata(data)
    } catch(error){
      console.log(error.responce);
    }finally{
      setLoading(false) //process is completed
    }
  }

  useEffect(()=>{
    getData()
  },[url])
  return {apiData , loading}
}