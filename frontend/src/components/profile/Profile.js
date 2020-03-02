import React, { useEffect, useContext } from 'react'
import authService from '../../services/authService'
import { myContext } from '../../context'
import CardFood  from '../cardfood/CardFood'
import Request from '../request/Request'
import { Link } from 'react-router-dom'


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
          
          
          return(
            <>
            
            <div>
              <Link to="/home">Home</Link><br/>
              <Link to="/food">+</Link>

              {(context.state.userLogged) ? (
                context.state.userLogged.createdFood.map( food => (
                  <>
                  <h1>Comidas posteadas</h1>
                  <CardFood food={food} />
                  </>
                  ))
                
              ) : (<p>Loading...</p>)}

               {(context.state.userLogged) ? (
                context.state.userLogged.requestedFood.map( request => (
                  <>
                  <h1>Solicitudes</h1>
                  <Request request={request} />
                  </>
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
