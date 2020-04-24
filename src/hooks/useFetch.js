import {useState, useEffect} from 'react';

const useFetch = url => {

    const [data, setData] = useState([]);//El parametro de useState es aquel que se le quiere asignar a la variable cuando arranque el componente
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchResources(url);
    }, [url]);

    const fetchResources = async (url) => {
        try {
            let res = await fetch(url);
            let data = await res.json();
            setData(data);
            setLoading(false);
            setError(null);
        } catch (error) {
            setLoading(false);
            setError(null);
        }
    }

    return {data, loading, error};

}

export default useFetch;
