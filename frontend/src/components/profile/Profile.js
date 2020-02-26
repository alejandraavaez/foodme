import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import authService from '../../services/authService'

class Profile extends Component{
    
    componentDidMount = async ()=>{
        const res = await authService.loggedin().catch( ()=> this.props.history.push('/login'))
        console.log('aqui',res);
    }

    logout = async () => {
        await authService.logout()
        this.props.history.push('/login')
    }

    render() {
        return (
            <div className="container">
                <section>
                    <h2>Profile</h2>
                    <form>
                        <h4>Username</h4>
        
                    </form>
                    <Link to="/login">Log out</Link><br/>
                    <Link to="/add">+</Link>
                </section>
                <section>
                </section>   
            </div>
        )
    }
}

export default Profile