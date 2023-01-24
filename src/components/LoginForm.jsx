import Logo from '../asset/Logo.png'
// import LogoCloud from '../asset/Splash.svg'
import InputComponent from './InputComponent'
import LogoImage from '../components/LogoImage';


const LoginForm = () => {

    const handleSubmit = (e, value) => {
        // write handle submit code here

    }

    return (
        <>

            <div className="div-header" style={{ backgroundColor: ' #FFC75F', borderBottom: 'solid', borderColor: '#969696' }}>
                {/* <h1 style={{ color: '#EFEFEF', paddingLeft: '10%', paddingTop: '12px' }}>Lost in Translation</h1> */}
            </div>
            <div className="container" style={{ backgroundColor: ' #FFC75F', display: 'flex', height: '300px', maxWidth: 'inherit', position: 'absolute' }}>
                <div style={{ position: 'relative', top: '0', left: '0', marginLeft: '10em', marginTop: '2.5em' }}>
                    <img
                        alt="Cloud background"
                        src={LogoCloud}
                        width="120"
                        height="120"
                        style={{ left: '0', position: 'relative', top: '0' }}
                        className="image1"
                    />
                    <img
                        alt="A happy wavy robot"
                        src={Logo}
                        width="100"
                        height="100"
                        style={{ left: '12px', top: '12px', position: 'absolute'}}
                        className="image2"
                    />
                </div> 
                <LogoImage
              imgSrc={Logo}
              imgAlt={'A happy wavving robot'}
              imgWidth={'120'}
              imgHeight={'120'}
            />
                <div className='text' style={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    paddingLeft: '6.5em', paddingBottom: '5em'
                }}>
                    <h1 style={{ color: '#EFEFEF' }}>Lost in Translation</h1>
                    <h3 style={{ color: '#EFEFEF' }}>Get Started</h3>
                </div>
            </div>

           
            <div className='input-div' style={{
                marginLeft: "25%", marginRight: "10%", border: 'solid', padding: '40px', borderRadius: '2%', marginTop: '14em', position: 'absolute', zIndex: '110'
                , backgroundColor: 'white', width: '50%'
            }}>
                 <InputComponent
                handleSubmit={handleSubmit}
                ariaLabel={'Enter your username'}
                placeholder={'Enter user name'}
                inputBorder={'#EFEFEF'}
            />
                {/* <InputComponent inputBorder={'#EFEFEF'} /> */}
            </div>
        </>
    )
}

export default LoginForm