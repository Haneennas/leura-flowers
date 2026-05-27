import React from 'react'

function About() {
  return (
    <section className="about" id="about">
      <h1 className="heading"> <span> about </span> us </h1>
      <div className="row">
        <div className="video-container">
          <video src="about-vid.mp4" loop autoPlay muted playsInline></video>
        </div>
        <div className="content">
          <h3>Why Choose Us?</h3>
          <p>At Léura Flowers, we pride ourselves on sourcing the freshest blooms directly from local growers. Our passion for floral design ensures every bouquet tells a unique story of beauty and nature.</p>
          <p>With years of experience and a commitment to quality, we offer hand-delivered arrangements that brighten every occasion and space.</p>
          <a href="#" className="btn">Learn More</a>
        </div>
      </div>
    </section>
  )
}

export default About
