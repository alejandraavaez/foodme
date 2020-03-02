import React, { useContext } from 'react'
import foodService from '../../services/foodService'
import { Box, Image, AvatarGroup, Avatar, Text, Badge } from '@chakra-ui/core';
import { withRouter } from 'react-router-dom';
import requestService from '../../services/requestService';
import { myContext } from '../../context';




function CardFood({food, history, match}) {
  const context = useContext(myContext)

  const acceptRequest = () => {
    requestService.acceptRequest(food.request._id)
    .then(res => context.getProfile() )
    .catch( err => console.log(err) )
  }

  const denyRequest = () => {
    requestService.denyRequest(food.request._id)
    .then(res => context.getProfile() )
    .catch( err => console.log(err) )
  }

  const deleteFood = () => {
    foodService.deleteFood(food._id)
    .then(res => history.push('/home'))
    .catch(err => console.log(err))
  }
  const requestFood = () => {
    requestService.requestFood(food._id)
    .then(res => console.log(res))
    .catch(err => console.log(err))
  }
    return (
    <>    
    {console.log('FOOOOD',food)}
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
              {food.name}<br/>
              {food.description}
              {food.request && food.request.userReceive? (
                <>
                <Text>Request by {food.request.userReceive.name}</Text>
                {food.request.status == 'waiting' ? (
            <>
            <button onClick={acceptRequest}>Accept</button>
            <button onClick={denyRequest}>Deny</button>
</>
          ) : (food.request.status === 'accepted' && match.path==='/profile' ? (
            <>
            <a href={`https://wa.me/${food.request.userReceive.phone}`} target='_blank'>whatsapp</a><br /><br />
            <a href={`tel:${food.request.userReceive.phone}`} target='_blank'>call phone</a>
            </>
          ):(null))}
                </>
              ) : (null)}
            </Box>

            <Box>
              {food.price}
            </Box>
            <Box>
            <AvatarGroup size="md" max={2}>
              <Avatar name={food.owner.username} src={food.owner.photoURL}  />
            </AvatarGroup>
            <Text>{food.owner.username}</Text>
            <Text>{food.owner.name}</Text>
            <Text type='hidden'>{food.owner.phone}</Text>
            <Text>{food.owner.adress}</Text>
            </Box>
          </Box>
          { match.path === '/home' && !food.request ? <button onClick={requestFood}>Solicitar</button> :(null)}
          { match.path === '/profile' && food.status === 'waiting' ? <button onClick={deleteFood}>Delete</button> : (null)}
        </Box>
      ) : (<p>Loading...</p>)}
    </>
  );
}


export default withRouter(CardFood)