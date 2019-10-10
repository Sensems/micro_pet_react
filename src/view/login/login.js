import React, {Component} from 'react'

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
				<div>这是登录页面</div>
		)
	}
}

export default Login;