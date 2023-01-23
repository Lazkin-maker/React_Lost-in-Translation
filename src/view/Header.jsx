import '../App.css';
import Logo from '../asset/Logo.png'
import LogoCloud from '../asset/Splash.svg'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const ImgHeader = () => {

  return (
    <>
      <img
        alt="A happy wavy robot"
        src={Logo}
        width="100%"
        height="auto"
        className="d-inline-block align-right"
        style={{
          backgroundImage: `url(${LogoCloud})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          width: "3rem",
          height: "3rem",
        }}
      />
    </>
  )
}


const Header = () => {
  return (
    <header>
      <Navbar>
        <Container>
          <Navbar.Brand>
            <ImgHeader />
            {' '}
          </Navbar.Brand>
          <h1 style={{ color: '#EFEFEF', paddingLeft: '10%', paddingTop: '12px' }}>Lost in Translation</h1>        
          </Container>
      </Navbar>
    </header>
  )
}



export default Header;