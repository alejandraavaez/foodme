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



// import React, { Component } from 'react'
// import { Link } from 'react-router-dom'
// import authService from '../../services/authService'

// class Signup extends Component{
//     state={
//         email: '',
//         username: '',
//         email: '',
//         password: ''
//     }
//     handleChange=({target: {name,value}}) => this.setState({[name]: value})

//     handleSubmit= async () => {
//         const res = await authService.signup(this.state).catch(err => alert('User already exists: '+err))
//         if( res && res.data ) return this.props.history.push('/login')
//     }
//     render(){
//         return(
//         <div className="container">
//             <section>
//                 <h2>Sign up</h2>
//                 <form>
//                     <label>Email</label>
//                     <input name="email" value={this.state.email} onChange={this.handleChange} />
//                     <label>Username</label>
//                     <input name="username" value={this.state.username} onChange={this.handleChange} />
//                     <label>Password</label>
//                     <input name="password" value={this.state.password} onChange={this.handleChange} />
//                     <label>Phone</label>
//                     <input name="phone" value={this.state.phone} onChange={this.handleChange} />
//                 </form>
//                     <button onClick={this.handleSubmit}>Sign up</button>
//                 <div>
//                     <p>Already have an account? <Link to="/login">Log in</Link></p>
//                 </div>
//             </section>
//         </div>
//         )
//     }
// }

// export default Signup