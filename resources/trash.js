import { createContext } from "react"
import createUtilityClassName from "react-bootstrap/esm/createUtilityClasses"

componentDidMount = async () => {
    const resp = await fetch("./resources/scifi.json")
    if(resp.ok){
        const books = await resp.json()
    }
        this.setState({
            books: books
        })
    }

