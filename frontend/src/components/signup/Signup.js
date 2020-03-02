import React, { useContext } from 'react'
import { myContext } from '../../context'
import { useToast, Link } from "@chakra-ui/core";

function Login() {
    const context = useContext(myContext)
    // const toast = useToast()

    // toast({
    //     title:'hola', status:'success', duration:'2000'
    // })
    return (
        <myContext.Consumer>
            { context => (
                  <div className="signup_in">
                     <section>
                        <h1>Create</h1>
                        <h1>Account</h1>
                       <div className="infobox">
                         <h2>Sign up</h2>
                         <form>
                             <input name="email" value={context.state.signup_in.email} onChange={context.handleChange} placeholder="Email"/>  
                             <input name="name" value={context.state.signup_in.name} onChange={context.handleChange} placeholder="Name"/>
                             <input name="password" value={context.state.signup_in.password} onChange={context.handleChange} placeholder="Password" />
                             <input name="phone" value={context.state.signup_in.phone} onChange={context.handleChange} placeholder="Phone" />
                         </form>
                             <button onClick={context.handleSubmitSignup}>SIGN UP</button>
                         <div>
                            <p>Already have an account? <Link to="/login">Log in</Link></p>
                         </div>
                         </div>
                     </section>
                 </div>
            )}
        </myContext.Consumer>
    )
}

export default Login



