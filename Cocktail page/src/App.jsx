import './App.css'
import { BrowserRouter as Router} from "react-router-dom";
import { Route, Routes,} from 'react-router-dom';
// import pages
import Home from './Pages/Home'
import About from './Pages/About'
import NotFound from './Pages/NotFound';
import Navbar from "./components/Navbar.jsx";
import CocktailDetail from './Pages/CocktailDetail.jsx';
import Contact from './components/Contact.jsx';

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />}/>
        <Route path='contact' element={<Contact/>}></Route>
        <Route path='cocktail/:id' element={<CocktailDetail/>} />
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </Router>
  )
}

export default App
