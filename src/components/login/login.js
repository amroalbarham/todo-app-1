import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/authContext';
import { If, Else, Then } from 'react-if';
import { Button} from "@blueprintjs/core";

const Login = () => {
  const contextType = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function changeUsername(e) {
    setUsername(e.target.value);
  }

  function changePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    contextType.login(username, password);
  }


  return (
    <If condition={contextType.loggedIn}>
      <Then>
        <Button className='bp3-intent-primary'  onClick={contextType.logout}>Logout</Button>
      </Then>
      <Else>
        <div style={{marginLeft:'7%'}}>
        <form onSubmit={handleSubmit}>
          <input required type="text" className="bp3-input" onChange={changeUsername} placeholder="Enter your Email" style={{width: '35%',marginLeft:'2%'}} />
          <input required type="password" className="bp3-input" onChange={changePassword} placeholder="Enter your password..." style={{width: '35%',marginLeft:'1%'}} />
          <Button type="submit" className='bp3-intent-primary' style={{marginLeft:'1%'}}>Login</Button>
        </form>
        </div>
      </Else>
    </If>
  )
}

export default Login