import axios from 'axios'

const requests = axios.create({
    baseURL: '/mock',
    timeout: 5000
})


//对外暴露
export default requests