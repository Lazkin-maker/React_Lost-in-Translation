import Logo from '../asset/Logo.png'
import LogoCloud from '../asset/Splash.svg'
import InputComponent from './InputComponent'


const LoginForm = () => {

    const handleSubmit = (e, value) => {
        // write handle submit code here

    }

    return (
        <>
            <div className="div-header" style={{ backgroundColor: ' #FFC75F', borderBottom: 'solid', borderColor: '#969696' }}>
                <h1 style={{ color: '#EFEFEF', paddingLeft: '10%', paddingTop: '12px' }}>Lost in Translation</h1>
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
                        style={{ left: '12px', top: '12px', position: 'absolute' }}
                        className="image2"

                    />
                </div>
                <div className='text' style={{
                    display: 'flex', flexDirection: 'column', justifyContent: 'center',
                    paddingLeft: '6.5em', paddingBottom: '5em'
                }}>
                    <h1 style={{ color: '#EFEFEF' }}>Lost in Translation</h1>
                    <h3 style={{ color: '#EFEFEF' }}>Get Started</h3>
                </div>
            </div>

            <InputComponent
                handleSubmit={handleSubmit}
                ariaLabel={'Enter your username'}
                placeholder={'Enter user name'}
                inputBorder={'#EFEFEF'}
            />
        </>
    )
}

export default LoginForm