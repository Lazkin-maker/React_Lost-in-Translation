import Logo from '../asset/Logo.png'
import InputComponent from './InputComponent'
import LogoImage from '../components/LogoImage';
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser, fetchUsers } from '../reducers/userSlice';
import { useNavigate } from 'react-router-dom';





const LoginForm = () => {

    const { users, loadingUsers } = useSelector(state => state.user);
    const [username, setUsername] = useState('');
    const [errorr, setError] = useState(null);
    const [userObj, setObj] = useState(null)

    const dispatch = useDispatch();
    const navigate = useNavigate();
    //const [userId, setId] = useState(0)
    //const newObjId =0;
    let userId = 0;

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])


    // const checkIfExist = (inputName) => {
    //     //console.log(users)

    //     const usernames = users.map(user => { // map doesn't change the current array, so we need always to re-assign to a new variable
    //         console.log(user.username, inputName)
    //         console.log(user.username === inputName)

    //         if(user.username === inputName){
    //             //console.log(user,'object')
    //             setObj(user);
    //             // setId(user.id);
    //             //console.log(userObj);
    //         }
    //        // setId(user.id);
    //         // console.log("This is username:: ",user.username);
    //         return user.username
    //     });

    //     const nameExists = usernames.includes(inputName)
    //     console.log(nameExists)
    //     return nameExists;
    // }

    const processInputString = (inputString) => {
        inputString = inputString.toLowerCase().replace(/[^a-zA-Z]/g, '');
        //const check = checkIfExist(inputString)
       // console.log(userObj);


        //if (!check) {
            const regex = /[^a-zA-Z]{0,40}$/
            if (regex.test(inputString)) {
                return { string: inputString, errorr: null }
            }
            console.log('något annat');
            return { string: null, errorr: "Something went wrong please try again!" }

        //} else {
            //console.log('något')
          //  return { string: inputString, errorr: "Something went wrong please try again!" }
        //}
    }

    const handleSubmit = async (event) => {
        const { string, errorr } = processInputString(username)
        
       // console.log(loginUser);
        if (string) { // true must changes
            event.preventDefault();
            console.log("You are :",string)
            console.log(username)
  
           const response = await dispatch(addUser({ username : string }))
           const newObjId = response.payload.user.id;
           userId = newObjId;
           //console.log(newObjId);
           //console.log(userId);

           //console.log(response);
           
        } else {
            setError(errorr)
        }

        //localStorage.setItem('username', JSON.stringify(string),[string] ) // TODO localStorage
        //localStorage.setItem('user', JSON.stringify(userId),[userId] ) // TODO localStorage

        localStorage.setItem('user', JSON.stringify({username: string, id: userId}));
        navigate('/translation');
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
            {/* {createdUserSuccessfull ? handleUserCreated() : ""} */}
        </>
    )
}

export default LoginForm