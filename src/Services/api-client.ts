import axios from "axios";


export default axios.create({
    baseURL:'https://api.rawg.io/api',
    params:{
        key: '1797a82ac83d4f529f0977c21008ab5c'
    }
})