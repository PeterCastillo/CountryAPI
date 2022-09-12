import { useParams } from "react-router";
import { getData } from "../hooks/getData"
import { Link } from "react-router-dom";
import { dataDetails } from "../hooks/dataDetails";
import Border from "../components/Secction/Border";

const CountryDetails = () => {

    let params = useParams()

    const { data , loading } = getData(`https://restcountries.com/v3.1/alpha/${params.id}`)

    const { filter, mapArray  } = dataDetails()

    console.log(data)

    if(loading){
        return (
            <span>Cargando...</span>
        )
    }

    return (
            <div>
                <div>
                    <Link to="/">Back</Link>
                </div>
                <div>
                    <div>
                        <img src={data[0].flags.svg} alt="" />
                    </div>
                    <div>
                        <span>{data[0].name.common}</span>
                        <div>
                            <div>
                                <span><b>Native name:</b> {filter(data[0].name.nativeName)}</span>
                                <span><b>Population:</b> {data[0].population}</span>
                                <span><b>Region:</b> {data[0].region}</span>
                                <span><b>Sub Region:</b> {data[0].subregion}</span>
                                <span><b>Capital:</b> {data[0].capital}</span>
                            </div>
                            <div>
                                <span><b>Top Level Domain:</b> {data[0].tld}</span>
                                <span><b>Currencies:</b> {filter(data[0].currencies)}</span>
                                <span><b>Languages:</b> {mapArray(data[0].languages)}</span>
                            </div>
                        </div>
                        <div>
                            <b>BorderCountries: </b>{data[0].borders.map( item =>(<Border key={item} border={item}/>))}
                        </div>
                    </div>
                </div>
            </div>
        )
    
}

export default CountryDetails