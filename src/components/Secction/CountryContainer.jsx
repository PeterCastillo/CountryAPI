import { getData } from "../../hooks/getData"
import Country from "./Country"

const CountryContainer = ({filter}) => {


    const { data , loading } = getData(`https://restcountries.com/v3.1/all`)

    if(loading){
        return (
            <div className="countrys">
                <div className="countryLoad"></div>
                <div className="countryLoad"></div>
                <div className="countryLoad"></div>
                <div className="countryLoad"></div>
                <div className="countryLoad"></div>
                <div className="countryLoad"></div>
                <div className="countryLoad"></div>
                <div className="countryLoad"></div>
                <div className="countryLoad"></div>
                <div className="countryLoad"></div>
                <div className="countryLoad"></div>
                <div className="countryLoad"></div>
            </div>
        )
    }

    return (
         <div className="countrys">
            {data.filter((item)=>{
                let name = item.name.common.toLowerCase()
                return name.startsWith(filter.filter.toLowerCase())
            })
            .filter((item)=>{
                let region = item.region
                if(filter.region.length > 1){
                    return region === filter.region
                }
                return item
            })
            .map(item => (
                <Country key={item.cca2} countryInfo={item} />
                ))}
         </div>
    )
}

export default CountryContainer