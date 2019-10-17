import React from 'react'
import MoreHoriz from '@material-ui/icons/MoreHoriz';
import Chat from '@material-ui/icons/Chat';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

class DynamicItem extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			anchorEl: null
		}
	}

	render() {
		let data = this.state;
		return (
				<div className="dynamicItem">
					<div className="userInfo">
						<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3442060684,767791650&fm=26&gp=0.jpg" alt=""/>
						<p className="username">范特西</p>
						<p className="releaseTime">10分钟前</p>
						<span className="operation" onClick={this.openMenu}>
							<MoreHoriz />
						</span>
					</div>
					<div className="describe">
						<p>这个冬天,我养了8年的猫,蛋糕因急性肾衰竭去世了,看着他痛苦的样子,我忍不住留下了泪水!</p>
					</div>
					<div className="imgList">
						<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3442060684,767791650&fm=26&gp=0.jpg" alt=""/>
						<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3442060684,767791650&fm=26&gp=0.jpg" alt=""/>
						<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3442060684,767791650&fm=26&gp=0.jpg" alt=""/>
					</div>
					<div className="datum">
						<span><Chat style={{fontSize:20}}/>23.5k</span>
						<span><FavoriteBorder style={{fontSize:20}} />22.2k</span>
					</div>
					<Menu
							id="simple-menu"
							anchorEl={data.anchorEl}
							keepMounted
							open={Boolean(data.anchorEl)}
							onClose={this.closeMenu}
					>
						<MenuItem style={{fontSize:14}} onClick={this.closeMenu}>取消关注</MenuItem>
						<MenuItem style={{fontSize:14}} onClick={this.closeMenu}>不再显示相关内容</MenuItem>
					</Menu>
				</div>
		)
	}

	openMenu = (event) => {
		this.setState({
			anchorEl: event.currentTarget
		})
	};

	closeMenu = (event) => {
		this.setState({
			anchorEl: null
		})
	}
}

export default DynamicItem;