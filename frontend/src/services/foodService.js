import axios from 'axios'
let baseURL = 'http://localhost:3000'

const service = axios.create({ withCredentials: true, baseURL })

const foodService ={
    newFood: async (food) => {
        return await service.post( '/api/food', food )
    },
    allFood: async (food) =>{ 
       
        return await service.get( '/api/food' , food )
    },
    detailFood: async (idFood) => {
        return await service.get('/api/food/'+idFood)
    },
    deleteFood: async (idFood) => {
        return await service.delete('/api/food/'+idFood)
    }
}

export default foodService