import axios from 'axios'
let baseURL = 'http://localhost:3000'

const service = axios.create({ withCredentials: true, baseURL })

const requestService ={
    requestFood: async (idFood) => {
        return await service.get( '/api/request/'+idFood )
    },
    acceptRequest: async (idFood) => {
      return await service.get( '/api/request/'+idFood+'/accepted' )
    },
    denyRequest: async (idFood) => {
    return await service.get( '/api/request/'+idFood+'/denied')
    }
}

export default requestService