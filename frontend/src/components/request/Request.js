import React, { useContext } from 'react'
import foodService from '../../services/foodService'
import { Box, Image, AvatarGroup, Avatar, Text, Badge } from '@chakra-ui/core';
import { withRouter } from 'react-router-dom';
import requestService from '../../services/requestService';
import { myContext } from '../../context';




function Request({request, history, match, food}) {
  const context = useContext(myContext)
  let color = 'green';

    console.log('requesttt', request);
    
    switch(request.status){
      case 'waiting': color='yellow'; break;
      case 'accepted': color='green'; break;
      case 'denied': color='red'; break;
    }
    console.log(request.status, color);
    
    return (
    <>    
      {request && request.food ? (
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
              <Badge variantColor={color}>{request.status}</Badge>
              {request.status==='accepted' ?(
                <>
                <p>aqui va toda la info</p>
                {request.food.owner && request.food.description ?(
                  <>
                  <p>{request.food.owner.name}</p>
                  <p>{request.food.owner.username}</p> 
                  <p>{request.food.owner.availableTime}</p>
                  <p>{request.food.description}</p>
                  </>
                ):(null)}
                {/* <a href={`https://wa.me/${food.request.userReceive.phone}`} target='_blank'>whatsapp</a><br /><br />
                <a href={`tel:${food.request.userReceive.phone}`} target='_blank'>call phone</a> */}
                </>
              ):(null)}
            </Box>

            <Box>
              {request.food.price}
            </Box>
           
          </Box>
          {/* {request.status == 'waiting' ? (
            <>
            <button onClick={acceptRequest}>Accept</button>
            <button onClick={denyRequest}>Deny</button>
</>
          ) : (request.status === 'accepted' ? (
            <>
            <a href={`https://wa.me/${request.userReceive.phone}`} target='_blank'>whatsapp</a><br /><br />
            <a href={`tel:${request.userReceive.phone}`} target='_blank'>call phone</a>
            </>
          ):(<p>Loading...</p>))} */}
         
        </Box>
      
      ) : (<p>Loading...</p>)}
    </>
  );
}


export default withRouter(Request)