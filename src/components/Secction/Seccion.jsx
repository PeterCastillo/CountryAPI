import { useState } from "react"
import Form from "./Form"
import CountryContainer from "./CountryContainer"
import  "../style/Seccion.scss"

const Seccion = () => {

    const [ filter , setFilter ] = useState({})
    return (
        <div className="seccion">
            <Form setFilter={setFilter}/>
            <CountryContainer filter={filter}/>
        </div>
    )
}

export default Seccion