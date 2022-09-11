import { useEffect } from "react"
import { useForm } from "../../hooks/useForm"

const Form = ({setFilter}) => {

    const [ inputs , handleFilter] = useForm({
        filter : '',
        region : ''
    })

    const { filter , region } = inputs
 
    useEffect(()=> {
        setFilter( inputs)
    })

    return (
        <div className="form">
            <div className="form-input">
                <input 
                    type="Text"
                    placeholder="Search for a country..."
                    name="filter"
                    value={ filter}
                    onChange={handleFilter}
                />
            </div>
            <select 
                className="form-select"
                name="region"
                value={region}
                onChange={handleFilter}
            >
                <option disabled selected value="">Filter by Region</option>
                <option value="Africa">Africa</option>
                <option value="Americas">America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </select>
        </div>
    )
}

export default Form