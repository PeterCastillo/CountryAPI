import Logo from "./Logo"
import StyleMode from "./StyleMode"
import "../style/Header.scss"

const NavBar = () => {
    return (
        <div className="header">
            <div className="navbar">
                <Logo/>
                <StyleMode/>
            </div>
        </div>
    )
}

export default NavBar