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
                  <div className="container">
                     <section>
                         <h2>Sign up</h2>
                         <form>
                             <label>Email</label>
                             <input name="email" value={context.state.signup_in.email} onChange={context.handleChange} />
                             <label>Username</label>
                             <input name="username" value={context.state.signup_in.username} onChange={context.handleChange} />
                             <label>Password</label>
                             <input name="password" value={context.state.signup_in.password} onChange={context.handleChange} />
                             <label>Phone</label>
                             <input name="phone" value={context.state.signup_in.phone} onChange={context.handleChange} />
                         </form>
                             <button onClick={context.handleSubmitSignup}>Sign up</button>
                         <div>
                            <p>Already have an account? <Link to="/login">Log in</Link></p>
                         </div>
                     </section>
                 </div>
            )}
        </myContext.Consumer>
    )
}

export default Login



