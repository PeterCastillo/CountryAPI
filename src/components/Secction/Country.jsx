import { Link } from "react-router-dom";
const Country = ({countryInfo}) => {
    return (
        <div className="country">
            <div className="country__img">
                <img src={countryInfo.flags.svg} alt={countryInfo.name.common}/>
            </div>
            <div className="country__info">
                <span><Link to={`/country/${countryInfo.cca2}`} className="name">{countryInfo.name.common}</Link></span>
                <div className="country__info__details">
                    <span><b>Population:</b>{countryInfo.population}</span>
                    <span><b>Region:</b>{countryInfo.region}</span>
                    <span><b>Capital:</b>{countryInfo.capital}</span>
                </div>
            </div>
        </div>
    )
}

export default Country