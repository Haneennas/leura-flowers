import React from 'react'

function Header({ page, setPage }) {
  return (
    <header>
      <div className="user-icons">
        <button className="fas fa-heart"></button>
        <button className="fas fa-shopping-cart"></button>
        <button className="fas fa-user"></button>
      </div>

      <button className="logo" onClick={() => setPage('home')}>
        LEURA<span> FLOWERS</span>
      </button>

      <nav className="navbar">
        {['home', 'about', 'products', 'review', 'contact'].map(p => (
          <button key={p} onClick={() => setPage(p)}
            style={{ color: page === p ? 'var(--pink)' : '' }}>
            {p}
          </button>
        ))}
      </nav>
    </header>
  )
}

export default Header
