import InputComponent from "../components/InputComponent";

const ProfileView = () => {
    const handleSubmit = (e, value) => {
        // write handle submit code here

    }
    
    return (
        <div>
            Profile View
            <InputComponent
                handleSubmit={handleSubmit}
                ariaLabel={'Enter a word'}
                placeholder={'Enter enter a word'}
                inputBorder={'#EFEFEF'}
            />
        </div>
    )
}

export default ProfileView;