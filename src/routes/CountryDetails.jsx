import { useParams } from "react-router";
import { getData } from "../hooks/getData"
import { Link } from "react-router-dom";

const CountryDetails = () => {

    let params = useParams()

    const { data , loading } = getData(`https://restcountries.com/v3.1/alpha/${params.id}`)
    console.log(data[0].cca2)
    return (
        <div>
            <Link to="/">Back</Link>
            <span>Hola</span>
        </div>
    )
}

export default CountryDetails