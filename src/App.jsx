import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home";
import Каталог from "./pages/katalog/Каталог";
import Доставка from "./pages/доставка/Доставка";
import NotFound from "./pages/notFound/Not.Found";
import Call from "./pages/call/Call"

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/katalog" element={<Каталог/>} />
        <Route path="/доставка" element={<Доставка/>} />
        <Route path="/*" element={<NotFound/>} />
        <Route path="/call" element={<Call/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
