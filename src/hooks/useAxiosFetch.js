import { useEffect, useState } from "react";
import axios from "axios";


function useAxiosFetch(dataURL){
   const [data,setData] = useState([]);
   const [fetchError, setFetchError] = useState(null);
   const [isLoading, setIsLoading] = useState(null);

   useEffect( () => {
        let isMounted=true;
        const sourse = axios.CancelToken.source();

        const fetchData = async (url)=>{
              setIsLoading(true)
              try{
                const response = await axios.get(url, {
                      cancelToken: sourse.token
                   });
                if(isMounted){
                    setData(response.data);
                    setFetchError(null);
                }
              }catch(err){
                if(isMounted){
                    setFetchError(err.message);
                    setData([]);
                }
              }finally{
                isMounted && setTimeout(()=>{ setIsLoading(false)},1000);
              }
        }
        fetchData(dataURL);
        return ( ()=>{
            isMounted=false;
            sourse.cancel();
        })
   },[dataURL])
return { data, fetchError, isLoading}
}
export default useAxiosFetch;

