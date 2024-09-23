import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthContextProvider';

export default function useDataFetch(endpoint) {
    const { baseUrl } = useContext(AuthContext);
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchData = () => {
        setLoading(true)
        axios.get(`${baseUrl}/${endpoint}`).then((response) => {
            console.log(response);
            setData(response?.data?.data)


        }).catch((error) => {
            console.log(error);

        }).finally(() => {
            setLoading(false)
        })
    }
    
    useEffect(() => {

       
        fetchData();


    }, [baseUrl, endpoint]


    )
    return { data, loading ,refetch:fetchData}
    
}


