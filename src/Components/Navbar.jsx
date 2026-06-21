const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src="https://www.monsterenergy.com/img/home/monster-logo.png" alt="" />
      </div>

      <ul className="navbar-links">
        <li><a href="#">Products </a></li>
        <li><a href="#">Flavors </a></li>
        <li><a href="#">Athletes </a></li>
        <li><a href="#">Events </a></li>
        <li><a href="#">Find a Store </a></li>
      </ul>

      <button className="navbar-btn">Shop Now ↗</button>
    </nav>
  )
}

export default Navbar