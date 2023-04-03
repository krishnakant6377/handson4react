import React from 'react'
import { Link } from 'react-router-dom'
import"../App.css"


const Navbar = () => {
  return (
    <div><ul>
    <li> <Link to="/" className='hii'><i>Home</i></Link> </li>
     <li> <Link to="/student" className='hii'> <i>Students</i> </Link>  </li>
      <li><Link to="/contact" className='hii'> <i>Contact Us</i>  </Link> </li>
     </ul>
    </div>
  )
}

export default Navbar
