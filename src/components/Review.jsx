import React from 'react'

function Review() {
  const reviews = [
    { name: "Sarah M.", stars: 5, text: "The flowers were absolutely stunning! Fresh, beautiful, and delivered right on time. Will definitely order again." },
    { name: "Lina K.", stars: 5, text: "Amazing quality and so beautifully arranged. Léura Flowers never disappoints. My go-to flower shop!" },
    { name: "Maya R.", stars: 4, text: "Lovely bouquet and great packaging. The flowers lasted over a week. Very happy with my purchase!" },
  ]

  return (
    <section className="review" id="review">
      <h1 className="heading"> Customer <span>Reviews</span> </h1>
      <div className="review-container">
        {reviews.map((r, i) => (
          <div className="review-box" key={i}>
            <div className="stars">
              {'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}
            </div>
            <p>"{r.text}"</p>
            <h3>— {r.name}</h3>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Review
