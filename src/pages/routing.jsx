import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Home from './home'
import Blogs from './blogs'
import Contact from './contact'
import NoPage from './no-page'
import Layout from './layout'
import About from './about'
import Products from './products'

function Routing() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="/blogs" element={<Blogs />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/about" element={<About />} />
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default Routing