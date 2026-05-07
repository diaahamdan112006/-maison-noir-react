import { useState } from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed w-full z-50 bg-primary/95 backdrop-blur-sm text-accent py-4 px-6 md:px-12">
      <div className="flex items-center justify-between">
        <Link to="/" className="font-cinzel text-2xl tracking-widest">MAISON NOIR</Link>
        
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>

        <ul className={`${isOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row absolute md:relative top-full left-0 md:top-auto w-full md:w-auto bg-primary md:bg-transparent flex-col md:flex-row gap-6 p-6 md:p-0`}>
          <li><Link to="/" className="hover:text-secondary transition" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/menu" className="hover:text-secondary transition" onClick={() => setIsOpen(false)}>Menu</Link></li>
          <li><Link to="/about" className="hover:text-secondary transition" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/gallery" className="hover:text-secondary transition" onClick={() => setIsOpen(false)}>Gallery</Link></li>
          <li><Link to="/contact" className="hover:text-secondary transition" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
