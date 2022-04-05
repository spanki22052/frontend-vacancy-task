import { useState } from 'react'
import { Link } from 'react-router-dom'
import { menu } from '../menu'
import './main.scss'

const NavbarComponent = () => {
  const [selectedId, setSelectedId] = useState(0)
  return (
    <div className="menu-block">
      <div className="menu">
        <span className="logo">
          <h1 className="left-side">ever</h1>
          <h1 className="right-side">board</h1>
          <h1 className="bottom">project subheading</h1>
        </span>
        {menu.map((item, index) => (
          <ul key={index} className="menu-item">
            <Link style={{ textDecoration: 'none' }} to={`/${item.id}`}>
              <li
                className={selectedId === index ? 'selected' : ''}
                onClick={() => setSelectedId(index)}
              >
                {item.icon}
                {item.title}
              </li>
            </Link>
          </ul>
        ))}

        <p className="language">Русский</p>
      </div>
    </div>
  )
}

export default NavbarComponent
