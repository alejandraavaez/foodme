import React, { useContext } from 'react'
import { myContext } from '../../context'
import { useToast, Icon, Stack, InputGroup, Input, InputLeftElement, InputRightElement } from "@chakra-ui/core";
import styled from 'styled-components';
import { MdEmail } from "react-icons/md"
import { Link } from 'react-router-dom';

function Login({history}) {
    const toast = useToast()
    const context = useContext(myContext)
    const login = async () =>{
      const res = await context.handleSubmit()
      if(res){
        toast({
          title: 'Welcome!',
          status: 'success',
          duration:'2000'
        })
        return history.push('/home')
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
                        <h1>Welcome</h1>
                        <h1>Back</h1>
                        </div>
                        <div className="infobox">
                        <h2 className="h2">Login</h2> <br />
                         <form>
                        <InputGroup margin="10px" height="44px" >
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
                        <InputGroup margin="10px" height="44px">
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
                         </form> <br /><br /><br />
                         <button className="botonSignupin" onClick={login}>Log in</button> <br />  <br /> <br />
                        <div className="signup_infooter">
                         <p>Don't have an account yet? <Link to="/signup" className="linkSignup">Sign up</Link></p>
                         </div>
                         </div>
                     </section>
                 </div>
            )}
        </myContext.Consumer>
    )
}

export default Login



