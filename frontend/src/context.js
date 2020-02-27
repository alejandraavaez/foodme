import React, { Component, createContext } from 'react'
import authService from './services/authService'
import { withRouter } from 'react-router-dom'
import foodService from './services/foodService'

export const myContext = createContext()
class Context extends Component {
    state={
        signup_in: { 
            userdescription: '',
            name: '',
            password: '',
            email: '',
            phone:'',
        },
        userLogged: null,
        newFood: {
            name: '',
            photoURL: '',
            price:'',
            description:''
        },
        profile:[ ]
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
            return this.props.history.push('/home')}
        
    }

    handleSubmitSignup= async () => {
        const res = await authService.signup(this.state.signup_in).catch(err => alert('User already exists:'+err))
        if( res && res.data ) return this.props.history.push('/login')
    }

    handleCreateSubmitFood = async () =>{
        const formData = new FormData()
        formData.append('name', this.state.newFood.name)
        formData.append('photoURL', this.state.newFood.photoURL)
        formData.append('price', this.state.newFood.price)
        formData.append('description', this.state.newFood.description)

        const res = await foodService.newFood(formData)
        console.log(res);   
        if( res && res.data ) return this.props.history.push('/profile')
    }

    handleChangenewFood = ({target: {name,value, files}}) => {
      console.log(files);
      
      value = (name === 'photoURL') ? files[0] : value
      console.log(value);
      

        this.setState( prevState => {return{
            ...prevState,
            newFood:{
                ...prevState.newFood,
                [name] : value
            }
        }} )
    }
    getProfile = async () => {
      const res = await authService.profile().catch(err => alert('Need to login'))
      console.log(res);
      if( res && res.data ) {
          this.setState({ userLogged:res.data.user })
          return this.state.userLogged
        }
  }

    render() {
        const { state, handleSubmit, handleChange, handleSubmitSignup, handleChangenewFood, handleCreateSubmitFood, getProfile } = this 
        return (
            <myContext.Provider value={{
                state, 
                handleChange, 
                handleSubmit,
                handleSubmitSignup,
                handleChangenewFood,
                handleCreateSubmitFood, 
                getProfile
                
            }}>
                {this.props.children}
            </myContext.Provider>
        )
    }
}
export default withRouter(Context)