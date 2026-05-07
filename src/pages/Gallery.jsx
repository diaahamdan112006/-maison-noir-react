function Gallery() {
  const categories = [
    {
      title: 'Our Dishes',
      images: [
        { src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600', caption: 'Fine Dining Experience' },
        { src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600', caption: 'Signature Dishes' },
        { src: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600', caption: 'Wagyu Selection' },
        { src: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=600', caption: 'Sweet Endings' }
      ]
    },
    {
      title: 'Our Restaurant',
      images: [
        { src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600', caption: 'Main Dining Room' },
        { src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?w=600', caption: 'Private Dining' },
        { src: 'https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?w=600', caption: 'Wine Cellar' },
        { src: 'https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=600', caption: 'Evening Ambiance' }
      ]
    },
    {
      title: 'Behind The Scenes',
      images: [
        { src: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=600', caption: 'Chef at Work' },
        { src: 'https://images.unsplash.com/photo-1544148103-0773bf10d330?w=600', caption: 'Bar Selection' },
        { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600', caption: 'Private Events' },
        { src: 'https://images.unsplash.com/photo-1592861956120-e524fc739696?w=600', caption: 'Dessert Art' }
      ]
    }
  ]

  return (
    <>
      <section className="relative h-80 flex items-center justify-center bg-primary text-accent pt-20">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center">
          <span className="text-secondary text-sm font-jost tracking-widest">VISUAL JOURNEY</span>
          <h1 className="font-cormorant text-5xl mt-2">Gallery</h1>
        </div>
      </section>

      <section className="py-20 px-6 bg-accent">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-secondary text-sm font-jost tracking-widest">THROUGH OUR LENS</span>
            <h2 className="font-cormorant text-4xl mt-2">Captured Moments</h2>
            <div className="w-20 h-0.5 bg-secondary mx-auto mt-4"></div>
          </div>

          {categories.map((cat, idx) => (
            <div key={idx} className="mb-16">
              <h3 className="font-cormorant text-3xl mb-8">{cat.title}</h3>
              <div className="grid md:grid-cols-4 gap-4">
                {cat.images.map((img, i) => (
                  <div key={i} className="relative group overflow-hidden">
                    <img src={img.src} alt={img.caption} className="w-full h-64 object-cover" />
                    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-accent p-3 text-center font-jost text-sm">
                      {img.caption}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Gallery
