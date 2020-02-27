import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import authService from '../../services/authService'
import foodService from '../../services/foodService'
import CardFood from '../cardfood/CardFood'

class Home extends Component{
  state={
    foods:[]
  }
    
    componentDidMount = async ()=>{
        const res = await authService.loggedin().catch( ()=> this.props.history.push('/login'))
        const {data:{food:foods}} = await foodService.allFood()
        console.log('foods liato', foods)
        this.setState({foods})
    }

    logout = async () => {
        await authService.logout()
        this.props.history.push('/login')
    }

    render() {
        return (
          
            <div className="container">
                <section>
                    <h2>HOME</h2>
                    <Link to="/login">Log out</Link><br/>
                    <Link to="/food">+</Link>
                    {
                      this.state.foods.map(food => 
                        <CardFood food={food} />
                      )
                    }
                </section>
            </div>
        )
    }
}

export default Home