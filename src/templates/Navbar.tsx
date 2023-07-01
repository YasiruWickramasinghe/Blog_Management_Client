import { Link, NavLink } from 'react-router-dom';

function Navbar() {

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">BLOG MANAGEMENT</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" >Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blogs" >BLOGS</NavLink>
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
