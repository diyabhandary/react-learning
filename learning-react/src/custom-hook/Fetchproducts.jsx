import { useEffect, useState } from "react"

export const useFetchApi = (url)=>{

  let [apiData , setApiData] = useState([])
  let [loading , setLoading] = useState(false)

  async function getData(){
    setLoading(true) //fetching of data started
    try{
      let responce = await fetch(url)
      let data = await responce.json()
      setApiData(data)
    } catch(error){
      console.log(error.responce);
    }finally{
      setLoading(false) //process is completed
    }
  }
useEffect(()=>{
  getData()
},[url])
return {apidata , loading}
}