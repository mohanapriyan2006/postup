import axios from "axios"
import { useEffect, useState } from "react"

const useAxiosFetch = (dataURL) => {
  const [data,setData] = useState([]);
  const [fetchError,setFetchError] = useState(null);
  const [isLoading,setIsLoading] = useState(false);

  useEffect(()=> {
    let isMount = true;
    const source = axios.CancelToken.source();

    const fetchData = async (dataURL) => {
        setIsLoading(true);
        try{
            const response = await axios.get(dataURL , {
                cancelToken: source.token
            });
            if(isMount){
                setData(response.data);
                setFetchError(null)
            }
        } catch (err){
            if(isMount){
                setFetchError(err.message);
                setData([]);
            }
        } finally {
            isMount && setTimeout(()=> setIsLoading(false),3000);
        }
    }

    fetchData(dataURL);

    const cleanUp = () => {
        isMount = false;
        source.cancel();
    }

    return cleanUp;

  },[dataURL]);


  return {data , fetchError,isLoading }
}

export default useAxiosFetch