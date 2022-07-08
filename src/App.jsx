import React from 'react'
import NavBar from './components/Navbar/NavBar.component'
import Footer from './components/Footer/Footer.component'
import ProductList from './components/ProductList/ProductList.components.jsx'
import './App.css'

function App() {
  return (
    <div>
      <>
      <NavBar />
      {/* <Banner /> */}
      <ProductList/>
      <Footer/> 
      </>
    </div>
  )
}

export default App
