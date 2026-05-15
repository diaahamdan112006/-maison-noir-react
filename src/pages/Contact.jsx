import { useState } from 'react'

function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <>
      <section className="relative h-80 flex items-center justify-center bg-primary text-accent pt-20 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1559339352-11d035aa65de?w=1920')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <span className="text-secondary text-sm font-jost tracking-widest">GET IN TOUCH</span>
          <h1 className="font-cormorant text-5xl mt-2">Contact & Reservations</h1>
        </div>
      </section>

      <section className="py-20 px-6 bg-accent">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-cormorant text-3xl mb-6">Reserve Your Table</h3>
            <p className="font-jost mb-8">For reservations of 6 or more guests, or special events, please contact us directly. We recommend booking at least 3 days in advance for weekend dining.</p>
            
            <div className="space-y-6 font-jost">
              <div>
                <h4 className="font-medium text-secondary">Location</h4>
                <p>Rue Gouraud, Gemmayzeh<br/>Beirut, Lebanon</p>
              </div>
              <div>
                <h4 className="font-medium text-secondary">Phone</h4>
                <p>+961 1 234 567</p>
              </div>
              <div>
                <h4 className="font-medium text-secondary">Email</h4>
                <p>reservations@maisonnoir.com</p>
              </div>
              <div>
                <h4 className="font-medium text-secondary">Hours</h4>
                <p>Mon-Fri: 12:00 - 23:00<br/>Sat: 11:00 - 00:00<br/>Sun: 11:00 - 22:00</p>
              </div>
            </div>
          </div>

          {submitted ? (
            <div className="bg-white p-8 text-center">
              <h4 className="font-cormorant text-2xl mb-4">Reservation Requested</h4>
              <p className="font-jost">Thank you! We will confirm your reservation via email within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white p-8 space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-jost text-sm block mb-2">First Name</label>
                  <input type="text" required placeholder="Your first name" className="w-full border p-3 font-jost text-sm" />
                </div>
                <div>
                  <label className="font-jost text-sm block mb-2">Last Name</label>
                  <input type="text" required placeholder="Your last name" className="w-full border p-3 font-jost text-sm" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-jost text-sm block mb-2">Email</label>
                  <input type="email" required placeholder="your@email.com" className="w-full border p-3 font-jost text-sm" />
                </div>
                <div>
                  <label className="font-jost text-sm block mb-2">Phone</label>
                  <input type="tel" placeholder="+961 XX XXX XXX" className="w-full border p-3 font-jost text-sm" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-jost text-sm block mb-2">Date</label>
                  <input type="date" required className="w-full border p-3 font-jost text-sm" />
                </div>
                <div>
                  <label className="font-jost text-sm block mb-2">Time</label>
                  <select required className="w-full border p-3 font-jost text-sm">
                    <option value="">Select time</option>
                    <option value="12:00">12:00</option>
                    <option value="13:00">13:00</option>
                    <option value="14:00">14:00</option>
                    <option value="18:00">18:00</option>
                    <option value="19:00">19:00</option>
                    <option value="20:00">20:00</option>
                    <option value="21:00">21:00</option>
                  </select>
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="font-jost text-sm block mb-2">Guests</label>
                  <select required className="w-full border p-3 font-jost text-sm">
                    <option value="">Select</option>
                    <option value="1">1 Guest</option>
                    <option value="2">2 Guests</option>
                    <option value="3">3 Guests</option>
                    <option value="4">4 Guests</option>
                    <option value="5">5 Guests</option>
                    <option value="6+">6+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="font-jost text-sm block mb-2">Occasion</label>
                  <select className="w-full border p-3 font-jost text-sm">
                    <option value="">None</option>
                    <option value="birthday">Birthday</option>
                    <option value="anniversary">Anniversary</option>
                    <option value="business">Business Dinner</option>
                    <option value="proposal">Proposal</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>
              <div>
                <label className="font-jost text-sm block mb-2">Special Requests</label>
                <textarea placeholder="Dietary requirements, seating preferences, etc." className="w-full border p-3 font-jost text-sm h-24"></textarea>
              </div>
              <button type="submit" className="bg-primary text-accent px-8 py-3 font-jost font-medium hover:bg-primary/80 transition">
                Request Reservation
              </button>
            </form>
          )}
        </div>
      </section>

      <div className="h-64 bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=1200')"}}>
        <div className="bg-primary/80 text-accent py-8 px-12 text-center">
          <p className="font-cormorant text-2xl">Rue Gouraud, Gemmayzeh, Beirut, Lebanon</p>
          <p className="font-jost text-sm mt-2">+961 1 234 567 | reservations@maisonnoir.com</p>
        </div>
      </div>
    </>
  )
}

export default Contact
