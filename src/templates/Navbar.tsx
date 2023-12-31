import { NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <NavLink className="navbar-brand" to="/" >BLOG MANAGEMENT</NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" >HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blogstableview" >TABLE VIEW</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blogscardview" >CARD VIEW</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/newblog" >NEW BLOG</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" >ABOUT</NavLink>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto text-right">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login" >LOGIN</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/signup" >SIGNUP</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar
