import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './login.scss'

class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
			username:'',
			password:''
		}
	}
	render() {
		return (
				<div className="loginBox">
					<div className="loginData">
						<div>
							<TextField
									label="用户名"
							/>
						</div>
						<div>
							<TextField
									label="密码"
									type="password"
									autoComplete="current-password"
							/>
						</div>
					</div>

					<Button variant="contained" color="primary" size="small">登录</Button>
				</div>
		)
	}
}

export default Login;