import '../App.css';
import Logo from '../asset/Logo.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoImage from '../components/LogoImage';
import { Link } from 'react-router-dom';




const Header = () => {
  let user = "Lalala"

  return (
    <header>
      <Navbar style={{ width: '100%' }}>
        <Container style={{ justifyContent: 'evenly' }}>
          <Navbar.Brand>
          <Link to="/translation">
            <LogoImage
              imgSrc={Logo}
              imgAlt={'A happy wavving robot'}
              imgWidth={'48em'}
              imgHeight={'48em'}
            />
            </Link>
            {' '}
          </Navbar.Brand>
          {/* TODO REMOVE */}
          <Link to="/">  
          <h1 style={{ color: '#EFEFEF' }}>Lost in Translation</h1>
          </Link>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'evenly' }}>
            <span style={{ backgroundColor: '#E7B355', borderRadius: '2em 0 0 2em', paddingLeft: '12px', color: '#EFEFEF' }}>{user}</span>
            <div style={{ backgroundColor: '#E7B355', width: '48px', height: '48px', borderRadius: '1.5em' }}>
              <Link to="/profile">  
                  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" fill="#EFEFEF" className="bi bi-person-circle" viewBox="0 0 16 16">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                    <path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
                  </svg>
              </Link>
            </div>
          </div>
        </Container>
      </Navbar>
    </header>
  )
}



export default Header;