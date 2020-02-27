import React, { useContext } from 'react'
import foodService from '../../services/foodService'

function CardFood({food}) {


    return (
            
                 <div className="container">
            
              
    <p>{food.name}</p>
                         
                 </div>
        
    )
}

export default CardFood