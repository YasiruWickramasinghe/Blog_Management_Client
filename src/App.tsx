import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./templates/Navbar"

import Home from "./pages/Home"
import About from "./pages/About"
import BlogList from './pages/BlogList';
import NewBlog from './pages/NewBlog';
import Login from "./pages/Login"
import Signup from "./pages/Signup"

import Footer from './templates/Footer';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <br/>
        <div className="container">
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/bloglist" Component={BlogList} />
          <Route path="/newblog" Component={NewBlog} />
          <Route path="/about" Component={About} />
          <Route path="/login" Component={Login} />
          <Route path="/signup" Component={Signup} />
        </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  )
}

export default App
