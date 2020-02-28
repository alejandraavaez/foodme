import React, { useContext } from 'react'
import foodService from '../../services/foodService'
import { Box, Image, AvatarGroup, Avatar, Text } from '@chakra-ui/core';
import { withRouter } from 'react-router-dom';
import requestService from '../../services/requestService';
import { myContext } from '../../context';



function Request({request, history, match}) {
  const context = useContext(myContext)

    const acceptRequest = () => {
      requestService.acceptRequest(request._id)
      .then(res => context.getProfile() )
      .catch( err => console.log(err) )
    }

    const denyRequest = () => {
      requestService.denyRequest(request._id)
      .then(res => context.getProfile() )
      .catch( err => console.log(err) )
    }

    return (
    <>    
      {request ? (
        <Box maxW="sm" borderWidth="1px" rounded="lg" overflow="hidden">
          <Image w="100%" src={request.food.image} alt={request.food.name} />

          <Box p="6">
            <Box
              mt="1"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
            >
              {request.food.name}
            </Box>

            <Box>
              {request.food.price}
            </Box>
            <Box>
            <AvatarGroup size="md" max={2}>
              <Avatar name={request.userReceive.username}  />
            </AvatarGroup>
            <Text>{request.userReceive.username}</Text>
            <Text>{request.status}</Text>
            </Box>
          </Box>
          {request.status == 'waiting' ? (
            <>
            <button onClick={acceptRequest}>Accept</button>
            <button onClick={denyRequest}>Deny</button>
</>
          ) : (null)}
         
        </Box>
      
      ) : (<p>Loading...</p>)}
    </>
  );
}


export default withRouter(Request)