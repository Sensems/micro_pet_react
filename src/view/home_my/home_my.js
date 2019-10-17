import React, {Component} from 'react'
import './home_my.scss'
import {connect} from 'react-redux'
import myStuffBg from '../../asset/images/background_1.png'
import actionCreator from "../../store/actionCreator";
import Swiper from 'swiper/js/swiper.min'
import 'swiper/css/swiper.min.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import EmojiPeople from '@material-ui/icons/EmojiPeople';
import Sms from '@material-ui/icons/Sms';
import SettingsApplications from '@material-ui/icons/SettingsApplications';
import AettingsApplications from '@material-ui/icons/Assignment';
import RecommendStyleOne from '../../components/recommend_style/recommend_style_one'
import RecommendStyleTwo from '../../components/recommend_style/recommend_style_two'
import RecommendStyleThree from '../../components/recommend_style/recommend_style_three'
import menu_article from "../../asset/images/article.png";
import menu_equip from "../../asset/images/equip.png";

class HomeMy extends Component {
	constructor(props) {
		super(props);
		this.state = {
			tabVal: 0,
			tabs: null,
			tab: null,
			optionList: [
				{
					title: '我的好友',
					firstIcon: <EmojiPeople style={{color:'#36cfc9'}} />,
				}, {
					title: '我的消息',
					firstIcon: <Sms style={{color:'#73d13d'}} />,
				}, {
					title: '我的设置',
					firstIcon: <SettingsApplications style={{color:'#f759ab'}} />,
				}, {
					title: '投诉建议',
					firstIcon: <AettingsApplications style={{color:'#ff4d4f'}} />,
				},
			],
			equipOne :{
				title: '有什么你养过的宠物让你有心里阴影让你这辈子再也不想养的!',
				commentNum: '20.4k',
				genre: '猫猫',
				time: '2小时前'
			},
			equipTwo :{
				title: '照顾猫咪有什么小窍门呢?你想不想知道!',
				commentNum: '24.4k',
				genre: '猫猫',
				time: '10分钟前',
				img_url: menu_article
			},
			equipThree : {
				title: '照顾猫咪有什么小窍门呢?你想不想知道!',
				commentNum: '24.4k',
				genre: '猫猫',
				time: '10分钟前',
				imgList: [
					menu_equip, menu_equip, menu_equip
				]
			}
		}
	}

	UNSAFE_componentWillMount() {
		this.props.changeNavStates();
	}

	componentDidMount() {
		this.initSwiper();
	}

	render() {
		let data = this.state;
		return (
				<div>
					<div className="user">
						<div className="userInfo">
							<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3442060684,767791650&fm=26&gp=0.jpg" alt=""/>
							<p className="username">范特西</p>
							<p className="describe">我就是我,不一样的烟火</p>
						</div>
						<div className="data">
							<div className="dataItem">
								<p>239</p>
								<span>粉丝</span>
							</div>
							<div className="dataItem">
								<p>239</p>
								<span>动态</span>
							</div>
							<div className="dataItem">
								<p>239</p>
								<span>文章</span>
							</div>
						</div>
						<div className="myStuff">
							<div className="stuffItem">
								<img src={myStuffBg} alt=""/>
							</div>
							<div className="stuffItem">
								<img src={myStuffBg} alt=""/>
							</div>
						</div>
					</div>

					<div className="other">
						<div className="swiper-container tabs">
							<div className="swiper-wrapper">
								<div className="swiper-slide">收藏</div>
								<div className="swiper-slide">选项</div>
							</div>
						</div>
						<div className="swiper-container tab">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<RecommendStyleOne data={data.equipOne} />
									<RecommendStyleTwo data={data.equipTwo} />
									<RecommendStyleThree data={data.equipThree} />
								</div>
								<div className="swiper-slide">
									<List>
										{data.optionList.map((item,key) => {
											const labelId = `checkbox-list-label-${key}`;
											return (
													<ListItem key={key} role={undefined} button>
														<ListItemIcon>
															{item.firstIcon}
														</ListItemIcon>
														<ListItemText id={labelId} primary={item.title} />
														<ListItemSecondaryAction>
															<KeyboardArrowRight />
														</ListItemSecondaryAction>
													</ListItem>
											);
										})}
									</List>
								</div>
							</div>
						</div>
					</div>
				</div>
		)
	}

	initSwiper = () => {
		this.setState({
			tabs: new Swiper('.tabs', {
				spaceBetween: 10,
				freeMode: false,
				allowSlideNext : false,
				allowSlidePrev : false,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			}),
		}, () => {
			this.setState({
				tab: new Swiper('.tab', {
					spaceBetween: 10,
					// allowTouchMove: false,
					thumbs: {
						swiper: this.state.tabs
					}
				})
			})
		});
	}

}

function mapStateToProps() {
	return {};
}

function mapDispatchToProps(dispatch) {
	return {
		changeNavStates: () => dispatch(actionCreator.changeNavState('my'))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeMy);