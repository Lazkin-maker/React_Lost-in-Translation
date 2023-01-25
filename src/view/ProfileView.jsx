import { Container, Button} from "react-bootstrap";
import TranslationHistory from "../components/TranslationHistory";

const ProfileView = () => {
    const handleSubmit = (e, value) => {
        // write handle submit code here
    }
    
    return (
        <Container>
            <h1>Profile page</h1>
            <h2>History</h2>
            <Button>Logout</Button>
             <TranslationHistory/>
        </Container>
    )

}

export default ProfileView;