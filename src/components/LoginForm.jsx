import Logo from '../asset/Logo.png'
import InputComponent from './InputComponent'
import LogoImage from '../components/LogoImage';


const LoginForm = () => {
    const [user, setUsername] = useState('');

    const handleSubmit = (event) => {
        // write handle submit code here
        event.preventDefault();

        setUsername(user)
        console.log(user);
    }

    return (
        <>
            <div className="container" style={{ backgroundColor: ' #FFC75F', display: 'flex', height: '300px', maxWidth: 'inherit', position: 'absolute' }}>
                <div style={{ position: 'relative', top: '0', left: '0', marginLeft: '10em', marginTop: '2.5em', height: '100', width: '100' }}>
                    <LogoImage
                        imgSrc={Logo}
                        imgAlt={'A happy wavving robot'}
                        imgWidthF={'120'}
                        imgHeight={'120'}
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


            <div className='input-div' style={{
                marginLeft: "25%", marginRight: "10%", border: 'solid', padding: '40px', borderRadius: '2%', marginTop: '14em', position: 'absolute', zIndex: '110'
                , backgroundColor: 'white', width: '50%'
            }}>
                <InputComponent
                    handleSubmit={handleSubmit}
                    ariaLabel={'Enter your username'}
                    placeholder={'Enter user name'}
                    inputBorder={'#EFEFEF'}
                    value={username}
                    setValue={setUsername}
                />
                {/* <InputComponent inputBorder={'#EFEFEF'} /> */}
            </div>
        </>
    )
}

export default LoginForm