import { useState } from "react"
import Form from "../components/Secction/Form"
import CountryContainer from "../components/Secction/CountryContainer"
import  "../components/style/Seccion.scss"

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