import React, {Component} from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Face from '@material-ui/icons/Face';
import HomeRounded from '@material-ui/icons/HomeRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionIcon from '@material-ui/icons/Description';
import {Route, Switch, Redirect} from "react-router-dom";
import store from '../../store'

import './home.scss'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '这是首页',
			NavigationValue: 'index',
			isLogin: false,
		};
		store.subscribe(() => {
			this.getNavState(store.getState())
		})
	}

	UNSAFE_componentWillMount() {
		if(React.$getLocalStorage('userInfo') !== null) {
			this.setState({
				isLogin: true
			})
		}
	}

	render() {
		let data = this.state;
		return (
				<div className="container">
					<div className="homeBox">
						<Switch>
							{
								this.props.routes.map((route, key) => {
									if(route.auth && !data.isLogin) {
										return <Redirect to={{pathname: '/',state: { from: this.props.location }}} />
									}
									return <Route key={key} exact path={route.path} component={route.component}/>
								})
							}
						</Switch>
					</div>
					<div className="bottomNav">
						<BottomNavigation value={data.NavigationValue} onChange={this.handleChange}>
							<BottomNavigationAction label="首页" value="index" icon={<HomeRounded/>}/>
							<BottomNavigationAction label="文章" value="article" icon={<DescriptionIcon/>}/>
							<BottomNavigationAction label="收藏" value="favorite" icon={<FavoriteIcon/>}/>
							<BottomNavigationAction label="我的" value="my" icon={<Face/>}/>
						</BottomNavigation>
					</div>
				</div>
		)
	}

	handleChange = (e, newValue) => {
		this.setState({
			NavigationValue: newValue,
		});
		if (newValue === "index") {
			newValue = '';
		}
		this.props.history.push(`/home/${newValue}`)
	};

	getNavState = (val) => {
			this.setState({
				NavigationValue: val.navState
			})
	}
}


export default Home