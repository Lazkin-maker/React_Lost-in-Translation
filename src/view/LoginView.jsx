import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/LoginForm"

const LoginView = () => {
    const loggedInUser = useSelector(state => state.user.loggedInUser);
    const navigate = useNavigate();

  
    // useEffect(() => {
    //     if (loggedInUser) {
    //         navigate('/translation')
    //     }
    // }, [loggedInUser, navigate])


    return (
        <>
        <div>
            <LoginForm />
        </div>
        </>
    )
}

export default LoginView