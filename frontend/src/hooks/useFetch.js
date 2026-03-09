import { useEffect, useState } from "react";

export default function useFetch(apiCall) {

  const [data,setData] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(()=>{

    const load = async ()=>{

      try{
        const res = await apiCall();
        setData(res);
      }
      catch(e){
        console.error(e);
      }

      setLoading(false);

    }

    load();

  },[]);

  return {data,loading};

}