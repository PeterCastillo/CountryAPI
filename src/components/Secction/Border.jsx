import { getData } from "../../hooks/getData"

const Border = ({border}) => {
    const { data , loading } = getData(`https://restcountries.com/v3.1/alpha/${border}`)

    if(loading) {
        return (<></>)
    }
    return (
        <span className="country">{data[0].name.common} </span>
    )
}

export default Border