import '../App.css';
import Logo from '../asset/Logo.png'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import LogoImage from '../components/LogoImage';




const Header = () => {
  return (
    <header>
      <Navbar style={{ width: '100%' }}>
        <Container style={{ justifyContent: 'initial' }}>
          <Navbar.Brand>
            <LogoImage
              imgSrc={Logo}
              imgAlt={'A happy wavving robot'}
              imgWidth={'48em'}
              imgHeight={'48em'}
            />
            {' '}
          </Navbar.Brand>
          <h1 style={{ color: '#EFEFEF' }}>Lost in Translation</h1>
        </Container>
      </Navbar>
    </header>
  )
}



export default Header;