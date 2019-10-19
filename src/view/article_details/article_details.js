import React from 'react'
import HeaderOne from '../../components/header_one';
import './article_details.scss'
import Chat from '@material-ui/icons/Chat';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
import Button from '@material-ui/core/Button'

class ArticleDetails extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			inputIsFocus: false,
			inputWidth:'50%'
		}
	}

	render() {
		let data = this.state;
		let tip = <div className="tip">
								<span><Chat style={{fontSize:20}}/>23.5k</span>
								<span><FavoriteBorder style={{fontSize:20}} />22.2k</span>
							</div>;

		let sendBtn = <Button onClick={this.sendMsg} variant="contained" color="primary">发送</Button>;

		return (
				<div>
					<HeaderOne title="文章详情" history={this.props.history} />
					<div className="detail">
						<div className="userInfo">
							<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3442060684,767791650&fm=26&gp=0.jpg" alt=""/>
							<p className="username">范特西</p>
							<p className="releaseTime">10分钟前</p>
							<span className="operation" onClick={this.openMenu}>
								关注
							</span>
						</div>
						<div className="title">圣诞节快到了,给你的宠物买什么衣服搭配才好看呢?</div>
						<div className='detailContent'></div>
						<div className="actionBar">
							<input ref={el => this.inputVal = el} style={{width:data.inputWidth}} onFocus={this.inputOnFocus} type="text" placeholder="说些什么吧"/>
							{/*<div className="tip">
								<span><Chat style={{fontSize:20}}/>23.5k</span>
								<span><FavoriteBorder style={{fontSize:20}} />22.2k</span>
							</div>*/}
							{data.inputIsFocus?sendBtn:tip}
						</div>
					</div>
				</div>
		)
	}

	inputOnFocus = () => {
		this.setState({
			inputIsFocus: true,
			inputWidth:'70%'
		})
	};

	sendMsg = () => {
		this.setState({
			inputIsFocus: false,
			inputWidth:'50%'
		});
		console.log(this.inputVal.value);
	}
}

export default ArticleDetails;