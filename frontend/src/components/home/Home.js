import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import authService from '../../services/authService'
import foodService from '../../services/foodService'
import CardFood from '../cardfood/CardFood'
import { myContext } from '../../context'

class Home extends Component{
  state={
    foods:[]
  }
    
    componentDidMount = async ()=>{
        const res = await authService.loggedin().catch( ()=> this.props.history.push('/login'))
        const {data:{food:foods}} = await foodService.allFood()
        this.setState({foods})
    }

    logout = async () => {
        await authService.logout()
        this.props.history.push('/login')
    }

    render() {
        return (
          <myContext.Consumer>
            { context => (
              <div className="container">
              {context.state.userLogged ? (
                <section>
                    <h2>HOME</h2>
                    {console.log('context',context)}
                   <p>Welcome {context.state.userLogged.name}</p> 
                    <Link to="/login">Log out</Link><br/>
                    <Link to="/food">+</Link><br/>
                    <Link to="/profile">Profile</Link>
                    {
                      this.state.foods.map(food => 
                        <CardFood food={food} />
                      )
                    }
                </section>

              ) : (<p>Loading</p>)}
            </div>
            )}
            </myContext.Consumer>
        )
    }
}

export default Home