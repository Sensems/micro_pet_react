import React from 'react'
import HeaderOne from '../../components/header_one';
import './article_details.scss'

class ArticleDetails extends React.Component{
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	render() {
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
							<input type="text" placeholder="说些什么吧"/>
							<div></div>
						</div>
					</div>
				</div>
		)
	}
}

export default ArticleDetails;