import React, { useContext } from 'react'
import { myContext } from '../../context'
import { useToast, Link } from "@chakra-ui/core";

function Login() {
    const context = useContext(myContext)
    const toast = useToast()

    toast({
        title:'hola', status:'success', duration:'2000'
    })
    return (
        <myContext.Consumer>
            { context => (
                 <div className="signup_in">
                     <section>
                      <h1>Welcome</h1>
                      <h1>Back</h1>
                        <div className="infobox">
                         <h2>Log in</h2>
                         <form>
                             <label>Email</label>
                             <input name="email" value={context.state.signup_in.email} onChange={context.handleChange} />
                             <label>Password</label>
                             <input name="password" value={context.state.signup_in.password} onChange={context.handleChange} />
                         </form>
                         <button onClick={context.handleSubmit}>Log in</button>
                         <p>Don't have an account yet? <Link to="/signup">Sign up</Link></p>
                         </div>
                     </section>
                 </div>
            )}
        </myContext.Consumer>
    )
}

export default Login

// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import authService from '../../services/authService'


// class Login extends Component{
   

//     render(){
//         return(
//             <div classname="container">
//                 <section>
//                     <h2>Log in</h2>
//                     <form>
//                         <label>Email</label>
//                         <input name="email" value={this.state.email} onChange={this.handleChange} />
//                         <label>Password</label>
//                         <input name="password" value={this.state.password} onChange={this.handleChange} />
//                     </form>
//                     <button onClick={this.handleSubmit}>Log in</button>
//                     <p>Don't have an account yet? <Link to="/signup">Sign up</Link></p>
//                 </section>
//             </div>
//         )
//     }
// }


// export default Login

