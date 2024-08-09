import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Hero from './components/hero/Hero'
import Category from './components/category/Category'
import Product from './components/product/Product'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <Header/>
      <Hero/>
      <Category/>
      <Product/>
      <Footer/>
    </>
  )
}

export default App
