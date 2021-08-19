import React, { useContext, useState } from 'react';
import { AuthContext } from '../../context/authContext';
import { If, Else, Then } from 'react-if';
import { Button} from "@blueprintjs/core";

const SignUp = () => {
	const contextType = useContext(AuthContext);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [email, setEmail] = useState('');
	const [role, setRole] = useState('user');

	function changeUsername(e) {
		setUsername(e.target.value);
	}

	function changePassword(e) {
		setPassword(e.target.value);
	}

	function handleChangeRole(e) {
		setRole(e.target.value);
	}

	function handleSubmitSignup(e) {
		e.preventDefault();
		contextType.signup(email, username, password, role);
	}

	return (
		<If condition={contextType.loggedIn}>
			<Then>
				<div></div>
			</Then>
			<Else>
				<div style={{marginLeft:'5%'}}>
				<form onSubmit={handleSubmitSignup} style={{marginLeft :'5%'}}>
                     <input required type="text" className="bp3-input" name="username" onChange={changeUsername} placeholder="Enter Username" style={{width: '32%'}} />

                     <input required type="password" className="bp3-input" name="password" onChange={changePassword} placeholder="Enter Username" style={{width: '32%',marginLeft:'1%'}} />

                     <div className="bp3-html-select" style={{marginLeft:'1%'}}>
					<select  name="roles" id="roles" onChange={handleChangeRole}  style={{borderRadius :'5px' , height:'30px'}}>
						<option value="user">user</option>
						<option value="editor" >editor</option> <option value="admin">admin</option>
					</select>
                    </div>

					<Button type="submit" className='bp3-intent-primary' style={{marginLeft:'1%',width:'13%'}}>SignUp</Button>
				</form>
            </div>
			</Else>
		</If>
	);
};

export default SignUp;