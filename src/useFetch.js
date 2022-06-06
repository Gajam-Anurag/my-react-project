import { useEffect, useState } from "react";

const useFetch = (url) => {

    const [data, setdata] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [isError, setError] = useState(null);

    useEffect( () => {
        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, {signal: abortCont.signal})
        .then(res => {
            //console.log(res)
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
            if (err.name === 'AbortError'){
                console.log('Fetch aborted')
            }
            else{
                setIsPending(false);
                setError(err.message);
            }
            })
        }, 100);
        return () => abortCont.abort()
    }, [url]);
    return {data, isPending, isError}
}

export default useFetch;