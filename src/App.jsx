import NavBar from './components/Header/NavBar'
import './components/style/Normalize.scss'
import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
      <NavBar/>
      <>
      <Outlet>
      </Outlet>
      </>
    </>
  )
}

export default App
