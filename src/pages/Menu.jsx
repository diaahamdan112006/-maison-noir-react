import { Link } from 'react-router-dom'

function Menu() {
  return (
    <>
      <section className="relative h-80 flex items-center justify-center bg-primary text-accent pt-20 bg-cover bg-center" style={{backgroundImage: "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative z-10 text-center">
          <span className="text-secondary text-sm font-jost tracking-widest">OUR OFFERINGS</span>
          <h1 className="font-cormorant text-5xl mt-2">The Menu</h1>
        </div>
      </section>

      <section className="py-20 px-6 bg-accent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-jost tracking-widest">CULINARY JOURNEY</span>
            <h2 className="font-cormorant text-4xl mt-2">Seasonal Selections</h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto mt-4"></div>
          </div>

          <div className="mb-16">
            <h3 className="font-cormorant text-3xl mb-8">Starters</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { tag: 'Signature', name: 'Foie Gras Torchon', price: '$28', desc: 'Pan-seared foie gras, toasted brioche, fig compote, Maldon sea salt.' },
                { name: 'Tuna Tartare', price: '$24', desc: 'Yellowfin tuna, avocado mousse, crispy shallots, sesame-ginger dressing.' },
                { name: 'Burrata Caprese', price: '$18', desc: 'Fresh burrata, heirloom tomatoes, aged balsamic, micro basil, olive oil.' },
                { tag: 'Seasonal', name: 'Wild Mushroom Veloute', price: '$16', desc: 'Cep and porcini soup, truffle cream, chive oil, toasted hazelnuts.' }
              ].map((item, i) => (
                <div key={i} className="border-b pb-6">
                  {item.tag && <span className="text-secondary text-xs font-jost">{item.tag}</span>}
                  <div className="flex justify-between mt-1">
                    <h4 className="font-cormorant text-xl">{item.name}</h4>
                    <span className="font-cormorant text-secondary">{item.price}</span>
                  </div>
                  <p className="font-jost text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="font-cormorant text-3xl mb-8">Mains</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { tag: 'Chef\'s Special', name: 'Truffle Risotto', price: '$38', desc: 'Arborio rice, black truffle shavings, aged parmesan, white truffle oil.' },
                { tag: 'Most Popular', name: 'Wagyu Tenderloin', price: '$75', desc: 'A5 Wagyu, roasted bone marrow, charred leek puree, red wine jus.' },
                { name: 'Dover Sole Meuniere', price: '$48', desc: 'Whole roasted Dover sole, brown butter, capers, lemon, parsley.' },
                { name: 'Duck Breast', price: '$42', desc: 'Roasted duck breast, cherry gastrique, parsnip puree, wilted greens.' },
                { tag: 'Vegetarian', name: 'Charred Cauliflower', price: '$28', desc: 'Whole roasted cauliflower, tahini, pomegranate, za\'atar, pine nuts.' },
                { name: 'Lobster Thermidor', price: '$68', desc: 'Half Brittany lobster, cognac cream, gruyere gratin, asparagus.' }
              ].map((item, i) => (
                <div key={i} className="border-b pb-6">
                  {item.tag && <span className="text-secondary text-xs font-jost">{item.tag}</span>}
                  <div className="flex justify-between mt-1">
                    <h4 className="font-cormorant text-xl">{item.name}</h4>
                    <span className="font-cormorant text-secondary">{item.price}</span>
                  </div>
                  <p className="font-jost text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <h3 className="font-cormorant text-3xl mb-8">Desserts</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { name: 'Dark Chocolate Fondant', price: '$18', desc: 'Valrhona chocolate, salted caramel core, vanilla bean ice cream.' },
                { name: 'Creme Brulee', price: '$14', desc: 'Madagascar vanilla custard, caramelized sugar, fresh berries.' },
                { name: 'Tarte Tatin', price: '$16', desc: 'Caramelized apple tart, puff pastry, calvados cream, creme fraiche.' },
                { tag: 'Seasonal', name: 'Lemon Tart', price: '$14', desc: 'Preserved lemon curd, Italian meringue, candied zest, raspberry sorbet.' }
              ].map((item, i) => (
                <div key={i} className="border-b pb-6">
                  {item.tag && <span className="text-secondary text-xs font-jost">{item.tag}</span>}
                  <div className="flex justify-between mt-1">
                    <h4 className="font-cormorant text-xl">{item.name}</h4>
                    <span className="font-cormorant text-secondary">{item.price}</span>
                  </div>
                  <p className="font-jost text-sm text-gray-600 mt-1">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="mb-12">
            <div className="text-center mb-12">
              <span className="text-secondary text-sm font-jost tracking-widest">FROM THE CELLAR</span>
              <h2 className="font-cormorant text-4xl mt-2">Wine Selection</h2>
              <div className="w-20 h-0.5 bg-secondary mx-auto mt-4"></div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { name: 'Chateau Margaux 2015', price: '$320', desc: 'Bordeaux, France. Elegant with cassis, violet, and silky tannins.' },
                { name: 'Penfolds Grange 2018', price: '$450', desc: 'Shiraz, Barossa Valley. Rich dark fruit, spice, and exceptional depth.' },
                { name: 'Dom Perignon 2012', price: '$280', desc: 'Champagne, France. Fine bubbles, brioche, citrus, and mineral finish.' }
              ].map((item, i) => (
                <div key={i} className="border p-6 text-center">
                  <h4 className="font-cormorant text-xl">{item.name}</h4>
                  <span className="font-cormorant text-secondary text-lg">{item.price}</span>
                  <p className="font-jost text-sm text-gray-600 mt-2">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Link to="/contact" className="bg-primary text-accent px-8 py-3 font-jost font-medium hover:bg-primary/80 transition">Reserve a Table</Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Menu
