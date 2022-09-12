export const dataDetails = () => {

    const filter = (object) => {
        return Object.entries(Object.values(object)[0])[0][1]
    }

    const mapArray = (array) => {
        return Object.values(array).map( item => (
            <span key={item}>{item} </span>
        ))
    }

    return { filter, mapArray }
}