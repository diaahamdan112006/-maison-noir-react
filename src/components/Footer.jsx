import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-primary text-accent py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="font-cinzel text-3xl tracking-widest mb-4">MAISON NOIR</div>
        <p className="text-sm mb-6">2026 Maison Noir. All rights reserved.</p>
        <div className="flex justify-center gap-8 flex-wrap">
          <Link to="/" className="hover:text-secondary transition">Home</Link>
          <Link to="/menu" className="hover:text-secondary transition">Menu</Link>
          <Link to="/about" className="hover:text-secondary transition">About</Link>
          <Link to="/gallery" className="hover:text-secondary transition">Gallery</Link>
          <Link to="/contact" className="hover:text-secondary transition">Contact</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
