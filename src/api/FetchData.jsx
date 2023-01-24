import { useEffect } from "react"

const apiURL = 'https://grandiose-persistent-bread.glitch.me';
// const apiKey = ''

// Translation Users GET /translations?username=<query>
const FetchData = ({username}) => {

    useEffect(() => {
        const fetchTranslation = async () => {
            try {
                const response = await fetch(`${apiURL}/translations?username=${username}`);
                if (response.ok) {
                   throw new Error("no User")
                }
                const data = await response.json();
               
               return [null, data]
               
            } catch (error) {
                console.log(error)
            }
        };
        
        if (username) {
            fetchTranslation()
        } 
    }, [username]);
}

export default FetchData;