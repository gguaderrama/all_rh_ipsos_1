import axios from 'axios'
import https from 'https'

const getURL = () => {
    if (location.hostname === 'localhost') {
        return 'http://192.168.0.68:5081'
    } else {
        return 'http://192.168.0.68:5081'
    }
}
export const apiLogin = axios.create({
    baseURL: 'http://192.168.0.106:5080',
    timeout: 9000,
    headers: {
        Authorization: 'Basic bG9hZDp1c2Vy',
        Accept: 'application/json',
        'Api-Key': '123456789ABCD',
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})
const httpsAgent = new https.Agent({
    // rejectUnauthorized: false,
    // cert: fs.readFileSync("./usercert.pem"),
    // key: fs.readFileSync("./key.pem"),
    // passphrase: "YYY"
  })
  


const instance = axios.create( {
    // httpsAgent,
    crossdomain: true,
    baseURL: getURL(),
    timeout: 9000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*",
        // 'Api-Token': '0456B92CAE264ADA16D9DA3D2C5D64FA'
    }
})

instance.interceptors.request.use(
    config => {
        if (localStorage.access_token) {
            config.headers.Authorization = 'Bearer ' + localStorage.access_token
        }
        return config
    },
    err => {
        console.log(err)
        return Promise.reject(err)
    }
)

export default instance