import axios from 'axios'

const instance = axios.create({
    baseURL: "http://localost:8080"
})
export default instance