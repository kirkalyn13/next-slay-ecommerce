

import Link from 'next/link'
import { FaSearch, FaCartPlus, FaHeart } from 'react-icons/fa'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg py-4 bg-light fixed-top">
    <div className="container d-flex align-items-center">
      <Link className="navbar-brand fs-3 mt-0 d-flex align-items-center" href="#">
        <img src="/logo.png" alt="logo" className="img-fluid me-2 "/>
        <span className="mb-2">Slay.Ph</span>
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
    
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          <li className="nav-item active me-2">
            <Link className="nav-link" href="#">Home</Link>
          </li>
          <li className="nav-item me-2">
            <Link className="nav-link" href="#collection">Collection</Link>
          </li>
          <li className="nav-item me-2">
            <Link className="nav-link" href="#blogs">Blogs</Link>
          </li>
          <li className="nav-item me-2">
            <Link className="nav-link" href="#about">About Us</Link>
          </li>
          <li className="nav-item me-2">
            <Link className="nav-link" href="#popular">Popular</Link>
          </li>
        </ul>
        <form className="d-flex">
          <input className="px-2 search" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn-search text-light me-2" type="submit"><FaSearch/></button>
          <span><FaCartPlus className="cart-plus mt-2"/></span>
          <span><FaHeart className="cart-plus mt-2"/></span>
        </form>
      </div>
    </div>
  </nav>
  )
}

export default Navbar