import { Container, Button} from "react-bootstrap";
import { useNavigate } from "react-router";
import TranslationHistory from "../components/TranslationHistory";

const ProfileView = () => {
    const navigate = useNavigate();

    const handleLogut = () => {
        // localStorage.removeItem('username', JSON.stringify(''),[''])
        //localStorage.removeItem('user');

        localStorage.removeItem('user', JSON.stringify(''),[''])

        
        // localStorage.clear()
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