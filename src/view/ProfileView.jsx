import { useEffect } from "react";
import { Container, Button} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import TranslationHistory from "../components/TranslationHistory";
import { logOut } from "../reducers/userSlice";

const ProfileView = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const loggedInUser = useSelector(state => state.user.loggedInUser);

    // useEffect(() => {
    //     if (loggedInUser == null) {
    //         navigate('/')
    //     }
    // }, [loggedInUser, navigate])

    const handleLogut = () => {
        localStorage.removeItem('user', JSON.stringify(''),[''])
        dispatch(logOut());

        navigate('/')
    }
    
    return (
        <Container>
            <h1>Profile page</h1>
            <h2>History</h2>

            <Button
            onClick={handleLogut} >Logout</Button>
            {/* onClick={localStorage.removeItem('username')} >Logout</Button> */}
             <TranslationHistory/>
        </Container>
    )

}

export default ProfileView;