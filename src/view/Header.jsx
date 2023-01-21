// import '../App.css';
import Logo from '../asset/Logo.png'
import LogoCloud from '../asset/Splash.svg'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

// const Header = () => {
//     return (
//     <div>
//     <header>
//         <img src={Logo} alt="A happy wavy robot" />
//         <h1>Lost in Translation</h1>
//     </header>
//     </div>)
// } 


const Header = () => {
    return (
    <header>
        <Navbar>
        <Container>
          <Navbar.Brand>
            <img
              alt="A happy wavy robot"
              src={Logo}
              width="30"
              height="30"
              className="d-inline-block align-right"
            />{' '}
            <h1>Lost in Translation</h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </header>
    )
} 



export default Header;