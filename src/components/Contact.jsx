import React, { useState } from 'react'

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = () => {
    if (form.name && form.email && form.message) {
      setSent(true)
      setForm({ name: '', email: '', message: '' })
      setTimeout(() => setSent(false), 4000)
    }
  }

  return (
    <section className="contact" id="contact">
      <h1 className="heading"> Contact <span>Us</span> </h1>
      <div className="row">
        <div className="info">
          <h3>Get In Touch</h3>
          <p><i className="fas fa-map-marker-alt"></i> Jibsheet, Nabatieh, Lebanon</p>
          <p><i className="fas fa-phone"></i> +961 03 234 567</p>
          <p><i className="fas fa-envelope"></i> Me@leuraflowers.com</p>
          <p><i className="fas fa-clock"></i> Mon–Sat: 8am – 8pm</p>
        </div>

        <div className="form-container">
          <input name="name" value={form.name} onChange={handle} placeholder="Your Name" />
          <input name="email" type="email" value={form.email} onChange={handle} placeholder="Your Email" />
          <textarea name="message" value={form.message} onChange={handle} placeholder="Your Message"></textarea>
          <button className="btn" onClick={submit}>Send Message</button>
          {sent && <div className="success-msg">✓ Message sent! We'll get back to you soon.</div>}
        </div>
      </div>
    </section>
  )
}

export default Contact
