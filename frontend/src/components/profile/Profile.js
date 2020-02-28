import React, { useEffect, useContext } from 'react'
import authService from '../../services/authService'
import { myContext } from '../../context'
import CardFood  from '../cardfood/CardFood'
import Request from '../request/Request'


function Profile(props) {
  const context = useContext(myContext)
  useEffect(() => {
    authService.loggedin().catch( () => props.history.push('/login'))
    .then(res => {
      context.getProfile()
    })
    },[])

  return (
    <myContext.Consumer>
      { context => {
          const { userLogged } = context.state
        if(userLogged)
          return(
            <>
            <div>
              <h1>hola</h1>
              {(context.state.userLogged) ? (
                context.state.userLogged.createdFood.map( food => (
                  <CardFood food={food} />
                  ))
                
              ) : (<p>Loading...</p>)}
               {(context.state.userLogged) ? (
                context.state.userLogged.requestedFood.map( request => (
                  <Request request={request} />
                  ))
              ) : (<p>Loading...</p>)}
              
              </div>
            </>
        )
}}
    </myContext.Consumer>
  )
}

export default Profile
