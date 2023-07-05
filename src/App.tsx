import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./templates/Navbar"

import Home from "./pages/Home"
import About from "./pages/About"
import BlogList from './pages/blogPages/BlogList';
import NewBlog from './pages/blogPages/NewBlog';
import UpdateBlog from './pages/blogPages/UpdateBlog';
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import BlogItem from './pages/blogPages/BlogItem';

import Footer from './templates/Footer';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <div className="container mt-3 mb-3" >
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/bloglist" Component={BlogList} />
            <Route path="/newblog" Component={NewBlog} />
            <Route path="/updateblog/:id" Component={UpdateBlog} />
            <Route path="/blogitem/:id" Component={BlogItem} />
            <Route path="/about" Component={About} />
            <Route path="/login" Component={Login} />
            <Route path="/signup" Component={Signup} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
