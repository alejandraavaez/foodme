import React, { Component, createContext } from 'react'
import authService from './services/authService'
import { withRouter } from 'react-router-dom'
export const myContext = createContext()
class Context extends Component {
    state={
        signup_in: { 
            username: '',
            name: '',
            password: '',
            email: '',
            phone:'',
        },
        userLogged: null
    }
    handleChange = ({target: {name,value}}) => {
        this.setState( prevState => {return{
            ...prevState,
            signup_in:{
                ...prevState.signup_in,
                [name] : value
            }
        }} )
    }
    handleSubmit= async () => {
        const res = await authService.login(this.state.signup_in).catch(err => alert('Email or password incorrect'))
        console.log(res);
        if( res && res.data ) {
            this.setState({ userLogged:res.data.user })
            return this.props.history.push('/profile')}
        
    }
    handleSubmitSignup= async () => {
        const res = await authService.signup(this.state.signup_in).catch(err => alert('User already exists:'+err))
        if( res && res.data ) return this.props.history.push('/login')
    }
    render() {
        const { state, handleSubmit, handleChange, handleSubmitSignup } = this 
        return (
            <myContext.Provider value={{
                state, 
                handleChange, 
                handleSubmit,
                handleSubmitSignup
            }}>
                {this.props.children}
            </myContext.Provider>
        )
    }
}
export default withRouter(Context)