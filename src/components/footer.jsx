import {Link} from 'react-router-dom'
import logo from '../images/ps37-text-purp-09.png'

const Footer = () => {
  return (
  <div className="footer">
    <ul className="footer-list">
      <li><Link to="/events">EVENTS</Link></li>
      <li>
        <Link to="/"> 
         <div className="footer-img"><img src={logo} /></div>
      </Link>
      </li>
      <div>
        <li><Link to="/info">INFO</Link></li>
      </div>
    </ul>
  </div>
  )
}

export default Footer;