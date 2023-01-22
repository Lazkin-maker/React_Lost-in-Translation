import Logo from '../asset/Logo.png'
import LogoCloud from '../asset/Splash.svg'

const LoginForm = () =>{
    return (
        <>
       
        <div className="div-header" style={{backgroundColor : ' #FFC75F' , borderBottom : 'solid' , borderColor : '#969696'}}>
            <h1 style={{color : '#EFEFEF', paddingLeft: '10%', paddingTop: '12px' }}>Lost in Translation</h1>
        </div>
        <div className="container" style={{backgroundColor : ' #FFC75F' ,display: 'flex', height: '200px'}}>
        <img
              alt="Cloud Image"
              src={LogoCloud}
              width="120"
              height="120"
              style={{paddingLeft:'20%', paddingTop: '3%'}}
              className="image1"
            />
        <img
            alt="A happy wavy robot"
            src={Logo}
            width="100"
            height="100"
            style={{position :'absolute', paddingLeft:'21%', paddingTop: '5%'}}
            className="image2"
        
        />
            <div className='text' style={{display :'flex', flexDirection : 'column' , justifyContent: 'center',
                paddingLeft: '6.5em' }}>
                <h1 style={{color : '#EFEFEF' }}>Lost in Translation</h1>
                <h3 style={{color : '#EFEFEF'}}>Get Started</h3>
            </div>
        </div>
       
        <form>

        </form>
        </>
    )
}

export default LoginForm