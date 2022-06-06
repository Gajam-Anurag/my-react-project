import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setError] = useState(null);

    useEffect( () => {
        setTimeout(() => {
            fetch(url)
        .then(res => {
            console.log(res)
            if (!res.ok){
                throw Error('Could not fetch the data for that resource')
            }
            return res.json();
        })
        .then(data => {
            setdata(data)
            setIsPending(false)
            setError(null)
        })
        .catch( err => {
            setIsPending(false);
            setError(err.message);
            })
        }, 100);
    }, [url]);
    return {data, isPending, isError}
}

export default useFetch;