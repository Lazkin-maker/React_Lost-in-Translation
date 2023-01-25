// import Logo from '../asset/Logo.png'
// import LogoCloud from '../asset/Splash.svg'
// import InputComponent from './InputComponent'
// import LogoImage from '../components/LogoImage';
// import { useEffect, useState } from "react"
// import { useDispatch, useSelector } from "react-redux"
// import { addUser, fetchUsers } from '../reducers/userSlice';





// const LoginForm = () => {


//     const { users, loadingUsers, error } = useSelector(state => state.user)
//     const { username, setUsername } = useState("")
//     const dispatch = useDispatch()

//     useEffect(() => {
//         dispatch(fetchUsers())
//     }, [])

//     const handleSubmit = (event) => {
//         // write handle submit code here
//         //dispatch(addUser(value))
//         event.preventDefault();
//         console.log(username);
//     }

//     return (
//         <>

//             <div className="div-header" style={{ backgroundColor: ' #FFC75F', borderBottom: 'solid', borderColor: '#969696' }}>
//                 {/* <h1 style={{ color: '#EFEFEF', paddingLeft: '10%', paddingTop: '12px' }}>Lost in Translation</h1> */}
//             </div>
//             <div className="container" style={{ backgroundColor: ' #FFC75F', display: 'flex', height: '300px', maxWidth: 'inherit', position: 'absolute' }}>
//                 <div style={{ position: 'relative', top: '0', left: '0', marginLeft: '10em', marginTop: '2.5em', height: '100', width: '100' }}>
//                     <LogoImage
//                         imgSrc={Logo}
//                         imgAlt={'A happy wavving robot'}
//                         imgWidthF={'120'}
//                         imgHeight={'120'}
//                     />
//                 </div>

//                 <div className='text' style={{
//                     display: 'flex', flexDirection: 'column', justifyContent: 'center',
//                     paddingLeft: '6.5em', paddingBottom: '5em'
//                 }}>
//                     <h1 style={{ color: '#EFEFEF' }}>Lost in Translation</h1>
//                     <h3 style={{ color: '#EFEFEF' }}>Get Started</h3>
//                 </div>
//             </div>


//             <div className='input-div' style={{
//                 marginLeft: "25%", marginRight: "10%", border: 'solid', padding: '40px', borderRadius: '2%', marginTop: '14em', position: 'absolute', zIndex: '110'
//                 , backgroundColor: 'white', width: '50%'
//             }}>
//                 {/* <InputComponent
//                     handleSubmit={handleSubmit}
//                     ariaLabel={'Enter your username'}
//                     placeholder={'Enter user name'}
//                     inputBorder={'#EFEFEF'}
//                     value={username}
//                     setValue={setUsername}
//                 /> */}
//                 <InputComponent
//                     handleSubmit={handleSubmit}
//                     ariaLabel={'Enter your username'}
//                     placeholder={'Enter user name'}
//                     inputBorder={'#EFEFEF'}
//                     value={username}
//                     setValue={setUsername} />
//                 {loadingUsers ? <p>Loading...</p> : ""}
//                 {error !== null ? <p>Error...</p> : users.map(x => <p key={x.id}>{x.username}</p>)}
//             </div>

//         </>
//     )
// }

// export default LoginForm

import Logo from '../asset/Logo.png'
import InputComponent from './InputComponent'
import LogoImage from '../components/LogoImage';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser, fetchUsers } from '../reducers/userSlice';
import { redirect, useNavigate } from 'react-router-dom';

const LoginForm = () => {
    
    const { users, loadingUsers, error, createdUserSuccessfull } = useSelector(state => state.user)
   const [username, setUsername] = useState('');

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    const handleUserCreated = ()=> {
        //redirect('/translation'); old method

    }
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        // // write handle submit code here
        event.preventDefault();
        dispatch(addUser({username}))
        navigate('/translation')  ; // this is a new method to redirect
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
                
                {loadingUsers ? <p>Loading...</p> : ""}
               
            </div>
            {createdUserSuccessfull ? handleUserCreated() : ""}
        </>
    )
}

export default LoginForm