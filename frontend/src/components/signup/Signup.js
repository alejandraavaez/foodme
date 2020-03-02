import React, { useContext } from 'react'
import { myContext } from '../../context'
import { useToast, InputGroup, InputLeftElement, Icon, Input} from "@chakra-ui/core";
import styled from 'styled-components';
import { Link } from 'react-router-dom';




function Signup({history}) {
  const toast = useToast()
  const context = useContext(myContext)
  const signup = async () =>{
    const res = await context.handleSubmit()
    if(res){
      toast({
        title: 'Welcome!',
        status: 'success',
        duration:'2000'
      })
      return history.push('/login')
    }
    toast({
      title: 'Incorrect email or password',
      status: 'error',
      duration:'2000'
    })
  }
   
    return (
        <myContext.Consumer>
            { context => (
                  <div className="signup_in">
                     <section>
                       <div className="title">
                        <h1>Create</h1>
                        <h1>Account</h1>
                      </div>
                       <div className="infobox">
                         <h2 className="h2" >Sign up</h2>
                         <form>
                         <InputGroup margin="12px" height="44px" >
                          <InputLeftElement children={<Icon name="email" color="orange.300" paddingTop="5px" paddingLeft="10px" size="35px"/>} />
                          <Input 
                              rounded="20px"
                              type="text"
                              placeholder="  Email"
                              name="email"
                              value={context.state.signup_in.email}
                              onChange={context.handleChange}
                              focusBorderColor="orange.300"
                              border="0.3px solid rgba(160, 160, 160, 0.5)"
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
                              height="44px"
                              fontSize="1.3rem"
                              margin="auto"
                              />
                        </InputGroup>
                        <InputGroup margin="12px" height="44px" >
                          <InputLeftElement children={<Icon name="at-sign" color="orange.300" paddingTop="5px" paddingLeft="10px" size="35px"/>} />
                          <Input 
                              rounded="20px"
                              type="text"
                              placeholder="  Name"
                              name="name"
                              value={context.state.signup_in.name}
                              onChange={context.handleChange}
                              focusBorderColor="orange.300"
                              border="0.3px solid rgba(160, 160, 160, 0.5)"
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
                              height="44px"
                              fontSize="1.3rem"
                              margin="auto"
                              />
                        </InputGroup>
                        <InputGroup margin="12px" height="44px">
                          <InputLeftElement children={<Icon name="lock" color="orange.300" paddingTop="5px" paddingLeft="10px" size="35px"/>} />
                          <Input 
                              rounded="20px"
                              type="password"
                              placeholder="  •••••"
                              name="password"
                              value={context.state.signup_in.password}
                              onChange={context.handleChange}
                              focusBorderColor="orange.300"
                              border="0.3px solid rgba(160, 160, 160, 0.5)"
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
                              height="44px"
                              fontSize="1.3rem"
                              margin="auto"
                              />
                        </InputGroup>
                        <InputGroup margin="12px" height="44px">
                          <InputLeftElement children={<Icon name="phone" color="orange.300" paddingTop="5px" paddingLeft="10px" size="35px"/>} />
                          <Input 
                              rounded="20px"
                              type="text"
                              placeholder="  Phone number"
                              name="text"
                              value={context.state.signup_in.phone}
                              onChange={context.handleChange}
                              focusBorderColor="orange.300"
                              border="0.3px solid rgba(160, 160, 160, 0.5)"
                              boxShadow="0px 4px 4px rgba(0, 0, 0, 0.1)"
                              height="44px"
                              fontSize="1.3rem"
                              margin="auto"
                              />
                        </InputGroup>
                             {/* <input name="email" value={context.state.signup_in.email} onChange={context.handleChange} placeholder="Email"/>  
                             <input name="name" value={context.state.signup_in.name} onChange={context.handleChange} placeholder="Name"/>
                             <input name="password" value={context.state.signup_in.password} onChange={context.handleChange} placeholder="Password" />
                             <input name="phone" value={context.state.signup_in.phone} onChange={context.handleChange} placeholder="Phone" /> */}
                         </form>
                             <button className="botonSignupin" onClick={signup}>SIGN UP</button>
                         <div className="signup_infooter">
                            <p>Already have an account? <Link to="/login" className="linkSignup" >  Log in</Link></p>
                         </div>
                         </div>
                     </section>
                 </div>
            )}
        </myContext.Consumer>
    )
}

export default Signup



