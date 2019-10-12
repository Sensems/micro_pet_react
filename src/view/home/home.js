import React, {Component} from 'react'
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import HomeRounded from '@material-ui/icons/HomeRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DescriptionIcon from '@material-ui/icons/Description';
import { Route, Link, Switch } from "react-router-dom";

import './home.scss'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: '这是首页',
			NavigationValue: 'index',
		}
	}

	render() {
		let data = this.state;
		return (
				<div className="container">
						<div className="homeBox">
							<Switch>
								{
									this.props.routes.map((route,key) => {
										return <Route key={key} exact path={route.path} component={route.component}/>
									})
								}
							</Switch>
						</div>
					<Link to='/home/article'>hehe</Link>
					<div className="bottomNav">
						<BottomNavigation value={data.NavigationValue} onChange={this.handleChange}>
							<BottomNavigationAction label="首页" value="index" icon={<HomeRounded />} />
							<BottomNavigationAction label="文章" value="article" icon={<DescriptionIcon />} />
							<BottomNavigationAction label="收藏" value="favorite" icon={<FavoriteIcon />} />
							<BottomNavigationAction label="我的" value="my" icon={<FolderIcon />} />
						</BottomNavigation>
					</div>
				</div>
		)
	}

	handleChange = (e,newValue) => {
		this.setState({
			NavigationValue: newValue,
		});
		if(newValue === "index") {
			newValue = '';
		}
		this.props.history.push(`/home/${newValue}`)
	}
}

export default Home