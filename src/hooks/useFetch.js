import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [categoryList, setCategoryList] = useState([]);
  const [loading, setLoading] = useState(true);

 

  useEffect(() => {
    const dataApiFunct = async () => {
      try {
        const apiData = await fetch(url);
        const apiDataJson = await apiData.json();
        setCategoryList(apiDataJson);
        setLoading(false)
      } catch (error) {
          
          setCategoryList([]);
          console.log(error)
      }finally {
        setLoading(false);
    }
    };
    dataApiFunct()
  }, [url]);

  return {categoryList,loading}

};
export default useFetch;
