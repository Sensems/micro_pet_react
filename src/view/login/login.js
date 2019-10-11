import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Snackbar from '@material-ui/core/Snackbar';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import CircularProgress from '@material-ui/core/CircularProgress';
import './login.scss'
import avatar from '../../asset/images/default_avatar.jpg'

class Login extends Component{
	constructor(props) {
		super(props);
		this.state = {
			username:'',
			password:'',
			snackbarMsg:'',
			is_register: false,
			showPassword: false,
			is_loading: false,
			login_title:'登录',
			register_title:'注册',
			SnackbarOpen: false,
		}
	}
	render() {
		let data  = this.state;
		let button = null,tip =null;
		if(!data.is_register) {
			button = <Button className="loginBtn" variant="contained" onClick={this.login} size="medium">{data.login_title}</Button>;
			tip = <p onClick={() => {this.setState({is_register: true})}}>注册账号</p>;
		}else{
			button = <Button className="loginBtn" style={{background:'#ef5340'}} variant="contained" onClick={this.register} size="medium">{data.register_title}</Button>
			tip = <p onClick={() => {this.setState({is_register: false})}}>登录</p>;
		}

		return (
				<div>
					<div className="loginBox">
						<div className="avatar">
							<img src={avatar} alt="默认头型"/>
						</div>
						<div className="loginData">
							<div className="inputBoxMB">
								<FormControl style={{width:"90%"}}>
									<InputLabel htmlFor="adornment-password">用户名</InputLabel>
									<Input
											value={data.username}
											onChange={this.handleUsernameChange}
									/>
								</FormControl>
							</div>
							<div className="inputBoxMB">
								<FormControl style={{width:"90%"}}>
									<InputLabel htmlFor="adornment-password">密码</InputLabel>
									<Input
											type={data.showPassword ? 'text' : 'password'}
											value={data.password}
											onChange={this.handlePasswordChange}
											endAdornment={
												<InputAdornment position="end">
													<IconButton
															aria-label="toggle password visibility"
															onClick={this.handleClickShowPassword}
															onMouseDown={this.handleMouseDownPassword}
													>
														{data.showPassword ? <Visibility /> : <VisibilityOff />}
													</IconButton>
												</InputAdornment>
											}
									/>
								</FormControl>
							</div>
						</div>
						<div className="loadingWrap">
							{button}
							{data.is_loading && <CircularProgress size={30} className="buttonProgress"/>}
						</div>
						<div className="tip">
							{tip}
						</div>
					</div>
					<Snackbar
							anchorOrigin={{ vertical:'top', horizontal:'center' }}
							key={`top,center`}
							open={data.SnackbarOpen}
							autoHideDuration={2000}
							onClose={this.handleSnackbarClose}
							ContentProps={{
								'aria-describedby': 'message-id',
							}}
							message={<span id="message-id">{data.snackbarMsg}</span>}
					/>
				</div>
		)
	}
	handleClickShowPassword = () => {
		this.setState((prevState) => {
			return {
				showPassword: !prevState.showPassword
			}
		})
	};

	handleMouseDownPassword = event => {
		event.preventDefault();
	};

	handlePasswordChange = e => {
		this.setState({
			password:e.target.value
		});
	};

	handleUsernameChange = e => {
		this.setState({
			username:e.target.value
		});
	};

	login = () => {
		this.setState({
			is_loading: true,
			login_title:''
		});
		React.axiosPost('/user/login',{
			username: this.state.username,
			password: this.state.password,
		}).then(result => {
			if (result.data !== null && result.data !== "") {
				this.setState({
					is_loading: false,
					login_title:'登录'
				});
				this.props.history.push('/index');
			}else {
				this.setState({
					is_loading: false,
					login_title:'登录',
					SnackbarOpen: true,
					snackbarMsg: result.msg,
				});
			}
		})
	};

	register = () => {
		this.setState({
			is_loading: true,
			register_title:''
		});
		React.axiosPost('/user/register',{
			username: this.state.username,
			password: this.state.password,
		}).then(result => {
			if(result.code === '200') {
				this.setState({
					is_loading: false,
					register_title:'注册',
					is_register: false,
					SnackbarOpen: true,
					snackbarMsg: result.msg,
					password:'',
				});
			}else{
				this.setState({
					is_loading: false,
					register_title:'注册',
					SnackbarOpen: true,
					snackbarMsg: result.msg,
				});
			}
		})
	};

	handleSnackbarClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}
		this.setState({
			SnackbarOpen: false
		})
	}
}

export default Login;