import React, { useContext } from 'react'
import { AuthContext } from '../../context/authContext'
import { If } from 'react-if';

const Auth=(props)=> {

  const contextType = useContext(AuthContext);
  // console.log("🚀 ~ file: auth.js ~ line 8 ~ Auth ~ contextType", contextType)

    let render = false;

   try {
     render = contextType.loggedIn && props.capability
     ? contextType.user.capabilities.includes(props.capability)
     : false;
   } catch (error) {
    console.log('NOT AUTHORIZED', error.message);

   }
   
    return (
      <If condition={render}>
        <div>{props.children}</div>
      </If>
    )

}

export default Auth