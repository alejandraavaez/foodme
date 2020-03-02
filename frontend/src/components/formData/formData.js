import React, { useContext, useEffect } from 'react'
import { myContext } from '../../context'
import { useToast } from "@chakra-ui/core";
import authService from '../../services/authService';
import { Link } from 'react-router-dom';

function FormNewFood(props) {
    // const context = useContext(myContext)
    // const toast = useToast()

    // toast({
    //     title:'hola', status:'success', duration:'2000'
    // })
    useEffect(() => {
      authService.loggedin().catch( ()=> props.history.push('/login'))
      .then(res => console.log(res))
      })

    return (
        <myContext.Consumer>
            { context => (
                  <div className="container">
                     <section>
                         <h2>Post new food</h2>
                         <form>
                           
                             <label>Name</label>
                             <input name="name" value={context.state.newFood.name} onChange={context.handleChangenewFood} />
                             <label>Image</label>
                             <input type="file" name="photoURL" onChange={context.handleChangenewFood} />
                             <label>Available Time</label>
                             <input name="availableTime" value={context.state.newFood.availableTime} onChange={context.handleChangenewFood} />
                             <label>Days duration</label>
                             <input name="duration" value={context.state.newFood.duration} onChange={context.handleChangenewFood} />
                             <label>Description</label>
                             <input name="description" value={context.state.newFood.description} onChange={context.handleChangenewFood} />
                         </form>
                             <button onClick={context.handleCreateSubmitFood}>Create</button>
                         <div>
                              <Link to="/profile">Profile</Link>
                         </div>
                     </section>
                 </div>
            )}
        </myContext.Consumer>
    )
}

export default FormNewFood