import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="relative h-screen flex items-center justify-center bg-primary text-accent bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <p className="font-jost text-sm tracking-widest mb-4">EST. 2010 - BEIRUT, LEBANON</p>
          <h1 className="font-cormorant text-5xl md:text-7xl mb-6 leading-tight">
            Where Every Dish<br/><em className="text-secondary">Tells a Story</em>
          </h1>
          <p className="font-jost text-lg mb-8 max-w-2xl mx-auto">
            An intimate fine dining experience crafted from the finest seasonal ingredients, where French technique meets Lebanese soul.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link to="/menu" className="bg-secondary text-primary px-8 py-3 font-jost font-medium hover:bg-secondary/80 transition">Explore Menu</Link>
            <Link to="/contact" className="border border-accent px-8 py-3 font-jost font-medium hover:border-secondary hover:text-secondary transition">Reserve a Table</Link>
          </div>
        </div>
      </section>

      <section className="bg-primary text-accent py-8 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div><span className="text-secondary text-sm">Atmosphere</span><p className="font-cormorant text-xl mt-1">Intimate Atmosphere</p></div>
          <div><span className="text-secondary text-sm">Wine</span><p className="font-cormorant text-xl mt-1">Curated Wine List</p></div>
          <div><span className="text-secondary text-sm">Chef</span><p className="font-cormorant text-xl mt-1">Award-Winning Chef</p></div>
          <div><span className="text-secondary text-sm">Seasonal</span><p className="font-cormorant text-xl mt-1">Seasonal Ingredients</p></div>
        </div>
      </section>

      <section className="py-20 px-6 bg-accent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-jost tracking-widest">FROM OUR KITCHEN</span>
            <h2 className="font-cormorant text-4xl md:text-5xl mt-2">Signature Dishes</h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { tag: 'Chef\'s Special', name: 'Truffle Risotto', desc: 'Arborio rice, black truffle shavings, aged parmesan and a drizzle of white truffle oil.', price: '$38', img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600' },
              { tag: 'Fan Favourite', name: 'Wagyu Tenderloin', desc: 'A5 Wagyu with roasted bone marrow, charred leek puree and red wine jus.', price: '$75', img: 'https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600' },
              { tag: 'Dessert', name: 'Dark Chocolate Fondant', desc: 'Valrhona chocolate, salted caramel core, vanilla bean ice cream.', price: '$18', img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600' }
            ].map((dish, i) => (
              <div key={i} className="bg-white shadow-lg">
                <div className="h-64 bg-cover bg-center" style={{backgroundImage: `url(${dish.img})`}}></div>
                <div className="p-6">
                  <span className="text-secondary text-xs font-jost">{dish.tag}</span>
                  <h3 className="font-cormorant text-2xl mt-1">{dish.name}</h3>
                  <p className="font-jost text-sm text-gray-600 mt-2">{dish.desc}</p>
                  <p className="font-cormorant text-xl text-secondary mt-3">{dish.price}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/menu" className="bg-primary text-accent px-8 py-3 font-jost font-medium hover:bg-primary/80 transition">View Full Menu</Link>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-primary text-accent text-center">
        <blockquote className="font-cormorant text-3xl md:text-4xl max-w-3xl mx-auto italic">
          "Cooking is not a craft, it is an art - an expression of the soul on a plate."
        </blockquote>
        <cite className="font-jost text-secondary mt-4 block">- Chef Diyaa Hamdan, Head Chef & Founder</cite>
      </section>

      <section className="py-20 px-6 bg-accent">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="font-cormorant text-3xl mb-6">Opening Hours</h3>
            <ul className="font-jost space-y-3">
              <li className="flex justify-between"><span>Monday - Friday</span><span>12:00 - 23:00</span></li>
              <li className="flex justify-between"><span>Saturday</span><span>11:00 - 00:00</span></li>
              <li className="flex justify-between"><span>Sunday</span><span>11:00 - 22:00</span></li>
            </ul>
          </div>
          <div>
            <h3 className="font-cormorant text-3xl mb-6">Find Us</h3>
            <p className="font-jost">Rue Gouraud, Gemmayzeh<br/>Beirut, Lebanon</p>
            <p className="font-jost mt-2">+961 1 234 567</p>
            <Link to="/contact" className="inline-block border border-primary px-6 py-2 mt-4 font-jost hover:bg-primary hover:text-accent transition">Get Directions</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
