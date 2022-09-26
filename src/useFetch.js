import { useEffect, useState } from "react";



const useFetch = (url) => {

    const [data, setData] = useState(null)
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState(null)


    useEffect(() => {
        // Using a setTimeout just to see the loading message
        setTimeout(() => {
          fetch(url)
          .then(res => {
            if(!res.ok) {
              throw Error('Could not fetch the data for that resource')
            }
            return res.json()
          })
          .then((data) => {
            setData(data)
            setIsPending(false)
            setError(null)
          }).catch(err => {
            setIsPending(false)
            setError(err.message)
          })
        }, 600);
      }, [url])

      return {data, isPending, error}
}

export default useFetch