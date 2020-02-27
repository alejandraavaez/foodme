import React, { useContext } from 'react'
import foodService from '../../services/foodService'
import { Box, Image } from '@chakra-ui/core';
import { withRouter } from 'react-router-dom';



function CardFood({food, history, match}) {

  const deleteFood = () => {
    foodService.deleteFood(food._id)
    .then(res => history.push('/home'))
    .catch(err => console.log(err))
  }
    return (
    <>    
      {food ? (
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
          <Image w="100%" src={food.image} alt={food.name} />

          <Box p="6">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {food.name}
            </Box>

            <Box>
              {food.price}
            </Box>
          </Box>
          { match.path === '/home' ? <button onClick={deleteFood}>Solicitar</button>
          : <button onClick={deleteFood}>Delete</button>}
        </Box>
      
      ) : (<p>Loading..</p>)}
    </>
  );
}


export default withRouter(CardFood)