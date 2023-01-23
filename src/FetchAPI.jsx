import { useEffect } from "react"

// const apiURL = 'grandiose-persistent-bread.glitch.me'
// const valueId = '/translations'

const FetchAPI = () => {
    useEffect(() => {
        const theAPI = async () => {
            fetch('https://grandiose-persistent-bread.glitch.me/users')
            .then(response => response.json())
            .then(results => {
                console.log(results)
                // results will be an array of users that match the username of victor.
            })
            .catch(error => {
            })
        }

        theAPI()
    }, []);
}

export default FetchAPI;