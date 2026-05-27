import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Review from './components/Review'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [page, setPage] = useState('home')

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [page])

  const renderPage = () => {
    switch (page) {
      case 'home':     return <Home setPage={setPage} />
      case 'about':    return <div className="page-content"><About /></div>
      case 'products': return <div className="page-content"><Products /></div>
      case 'review':   return <div className="page-content"><Review /></div>
      case 'contact':  return <div className="page-content"><Contact /></div>
      default:         return <Home setPage={setPage} />
    }
  }

  return (
    <>
      <Header page={page} setPage={setPage} />
      {renderPage()}
      <Footer />
    </>
  )
}

export default App
