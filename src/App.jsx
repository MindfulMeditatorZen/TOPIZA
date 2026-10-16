import './App.css'
import HeroNavi from './components/heroNavi'
import ThreeMs from './components/threeMs'
import Dishes from './components/dishes'
import CountriesWith from './components/countriesWith'
import Footer from './components/footer'
import Login from './components/Login'
import SignUp from './components/signUp'
import PopularDish from './components/popularDish'
import OperateCountry from './components/operateCountry'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/popular-dishes" element={<PopularDish />} />
        <Route path="/operate-country" element={<OperateCountry />} />
        <Route
          path="*"
          element={
            <>
              <HeroNavi />
              <ThreeMs />
              <Dishes />
              <CountriesWith />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  )
}

export default App
