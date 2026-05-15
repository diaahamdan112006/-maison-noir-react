function About() {
  return (
    <>
      <section className="relative h-80 flex items-center justify-center bg-primary text-accent pt-20 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <span className="text-secondary text-sm font-jost tracking-widest">OUR STORY</span>
          <h1 className="font-cormorant text-5xl mt-2">About Maison Noir</h1>
        </div>
      </section>

      <section className="py-20 px-6 bg-accent">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-cormorant text-3xl mb-6">A Vision Born in Beirut</h3>
            <p className="font-jost mb-4">Maison Noir opened its doors in 2010 in the heart of Gemmayzeh, born from a vision to bridge French haute cuisine with the vibrant soul of Lebanese flavors. What started as a modest 20-seat restaurant has evolved into one of Beirut's most celebrated fine dining destinations.</p>
            <p className="font-jost mb-4">Our philosophy is simple: respect the ingredient, honor tradition, and dare to innovate. Every dish tells a story-of the farmers we know by name, of techniques passed down through generations, and of the city that continues to inspire us.</p>
            <p className="font-jost">Today, Maison Noir welcomes guests from around the world, offering an intimate escape where exceptional food meets warm Lebanese hospitality.</p>
          </div>
          <div className="h-96 bg-cover bg-center rounded" style={{backgroundImage: "url('https://images.unsplash.com/photo-1550966871-3ed3cdb51f3a?w=800')"}}></div>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-jost tracking-widest">RECOGNITION</span>
            <h2 className="font-cormorant text-4xl mt-2">Accolades</h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { title: 'Two Michelin Stars', desc: '2023, 2024' },
              { title: 'Middle East\'s Best Restaurant', desc: 'World Culinary Awards' },
              { title: 'Best Wine Program', desc: 'Lebanon Wine & Dining 2024' },
              { title: 'Chef of the Year', desc: 'Middle East Culinary Guild' }
            ].map((award, i) => (
              <div key={i} className="text-center p-6 border">
                <div className="text-secondary text-2xl mb-3">Award</div>
                <h4 className="font-cormorant text-xl">{award.title}</h4>
                <p className="font-jost text-sm text-gray-600 mt-1">{award.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-accent text-center">
        <div className="max-w-3xl mx-auto">
          <div className="w-32 h-32 rounded-full mx-auto mb-6 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=200')"}}></div>
          <h3 className="font-cormorant text-3xl">Chef Shaker Hamdan</h3>
          <p className="font-jost text-secondary mb-4">Head Chef & Founder</p>
          <p className="font-jost mb-4">Born in Beirut and trained at Le Cordon Bleu Paris, Chef Shaker Hamdan spent a decade refining his craft in Michelin-starred kitchens across Europe before returning home to transform Lebanon's culinary landscape.</p>
          <p className="font-jost">His cooking is a dialogue between continents-French precision meets Lebanese warmth. "Every plate is a conversation," he says. "Between the earth and the sea, between memory and discovery, between what was and what could be."</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="font-cormorant text-3xl mb-6">Our Kitchen Philosophy</h3>
            <p className="font-jost mb-4">We source from over 30 local farmers and fishermen across Lebanon. Our menus change with the seasons, celebrating ingredients at their peak. Nothing is imported unless it cannot be found here of equal or better quality.</p>
            <p className="font-jost">Sustainability guides every decision-from our zero-waste kitchen practices to our partnership with local artisans for tableware and decor. We believe that luxury and responsibility can coexist beautifully.</p>
          </div>
          <div className="h-96 bg-cover bg-center" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800)'}}></div>
        </div>
      </section>
    </>
  )
}

export default About
