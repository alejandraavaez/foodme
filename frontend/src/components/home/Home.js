import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import authService from '../../services/authService'

class Home extends Component{
    
    componentDidMount = async ()=>{
        const res = await authService.loggedin().catch( ()=> this.props.history.push('/login'))
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
                    
                </section>
            </div>
        )
    }
}

export default Home