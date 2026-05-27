import React from 'react'

function Home({ setPage }) {
  return (
    <section className="home" id="home">
      <div className="content">
        <h3>LEURA FLOWERS</h3>
        <span>Natural &amp; Beautiful Flowers</span>
        <p>Discover the freshest blooms for every occasion, hand-delivered with love from Léura's Flowers.</p>
        <button className="btn" onClick={() => setPage('products')}>Shop Now</button>
      </div>
    </section>
  )
}

export default Home
