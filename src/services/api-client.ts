import axios from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '972fa61f11394f0db31fee28ad1677be'
    }
})
