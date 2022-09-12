import { useEffect, useState } from "react"

export const getData = (url) => {

    const [ loading , setLoading ] = useState(true)
    const [ data , setData ] = useState([])

    const fetchAPI = async() => {
        try {
            const res = await fetch(url)
            const info = await res.json()
            setData(info)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAPI()
    }, [url])

    return { data , loading  }
}