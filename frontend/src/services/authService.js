import axios from 'axios'
let baseURL = 'http://localhost:3000'

const service = axios.create({ withCredentials: true, baseURL })

const authService ={
    signup: async (user) => {
        return await service.post( '/auth/signup', user )
    },
    login: async (user) =>{ 
        console.log(user);
        
        return await service.post( '/auth/login', user )
    },
    home: async (user) => {
        return await service.get('/auth/home')
    },
    profile: async (user) => {
      return await service.get('/auth/profile')
    },
    loggedin: async () => {
        return await service.get('/auth/isLoggedin')
    },
    logout: async (user) => {
        return await service.get( '/auth/logout', user )
    }
}

export default authService