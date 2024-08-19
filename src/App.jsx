import './App.css'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Home from "./pages/home/Home";
import Каталог from "./pages/katalog/Каталог";
import Доставка from "./pages/доставка/Доставка";
import NotFound from "./pages/notFound/Not.Found";
import Call from "./pages/call/Call"
import Detail from './pages/detail/Detail';
import Login from "./pages/login/Login"
import Manage from './pages/admin/Manage';
import Admin from './pages/admin/Admin';
import Name from './pages/admin/Name';
import Auth from './pages/auth/Auth';

function App() {

  return (
    <>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/katalog" element={<Каталог/>} />
        <Route path="/доставка" element={<Доставка/>} />
        <Route path="/call" element={<Call/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<Detail/>} />
        <Route path="/" element={<Auth/>}>
            <Route path="admin" element={<Admin />}>
              <Route path="manage" element={<Manage />}></Route>
              <Route path="name" element={<Name />}></Route>
            </Route>
        </Route>
        <Route path="/*" element={<NotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
