import React, { useEffect, useContext } from 'react'
import authService from '../../services/authService'
import { myContext } from '../../context'
import CardFood  from '../cardfood/CardFood'


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
              {(context.state.userLogged) ? (
                context.state.userLogged.createdFood.map( food => (
                  <CardFood food={food} />
                ))
                
              ): (<p>Loading...</p>)}
              <h1>hola</h1>
              </div>
            </>
        )
}}
    </myContext.Consumer>
  )
}

export default Profile
