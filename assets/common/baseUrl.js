import { Platform } from 'react-native'


let baseURL = 'https://ecommerce-backend-server1.herokuapp.com/api/v1/'

/*{Platform.OS == 'android'
? baseURL = 'http://192.168.1.16:5000/api/v1/'
: baseURL = 'http://localhost:5000/api/v1/'
}*/

export default baseURL;