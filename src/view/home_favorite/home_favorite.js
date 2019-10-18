import React, {Component} from 'react'
import {connect} from 'react-redux'
import './home_favorite.scss'
import actionCreator from "../../store/actionCreator";
import PersonPin from '@material-ui/icons/PersonPin';
import Class from '@material-ui/icons/Class';
import Button from '@material-ui/core/Button';

class HomeFavorite extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hintMsg: ''
		}
	}

	UNSAFE_componentWillMount() {
		this.props.changeNavStates()
	}

	render() {
		return (
				<div>
					<h1 style={{textAlign:'left', paddingLeft:'10px'}}>我的收藏</h1>
					{/*<div className="hintMsg">
						<Class style={{fontSize:'80px'}} />
						<p>你还没有任何收藏哦!</p>
					</div>*/}
					<div className="loginMsg">
						<PersonPin style={{fontSize:'80px'}} />
						<p>请先登录哦!</p>
						<Button variant="contained" size="medium" className="loginBtn" onClick={this.goToLogin}>
							登录
						</Button>
					</div>
				</div>
		)
	}

	goToLogin = () => {
		this.props.history.push('/')
	}
}

function mapStateToProps() {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		changeNavStates: () => dispatch(actionCreator.changeNavState('favorite'))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeFavorite);