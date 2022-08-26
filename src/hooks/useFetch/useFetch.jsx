import { useQuery } from "react-query";

export const useFetch = () => {

    const getData = async () => {
        const response_data = await fetch(process.env.REACT_APP_SUPER_HERO_API);
        return await response_data.json();
      }

    const { data, status } = useQuery('results_data', getData());
    
    return {
        data,
        status
    }
}

export default useFetch