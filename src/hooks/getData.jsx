import { useEffect, useState } from "react"

export const getData = (url) => {

    const [ loading , setLoading ] = useState(false)
    const [ data , setData ] = useState([])

    const fetchAPI = async() => {
        try {
            setLoading(true)
            const res = await fetch(url)
            const info = await res.json()
            setLoading(false)
            setData(info)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchAPI()
    }, [url])

    return { data , loading  }
}