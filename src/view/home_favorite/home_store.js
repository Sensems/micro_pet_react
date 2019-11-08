import React from 'react';
import style from './home_store.module.scss';
import './other.scss';
import box from '../../asset/images/box_2.png';
import bowl from '../../asset/images/bowl.png';
import heart from '../../asset/images/heart.png';
import hospital from '../../asset/images/hospital.png';
import pet from '../../asset/images/pet.png';
import question from '../../asset/images/question.png';
import TitleBar from '../../components/titleBar';
import Swiper from 'swiper/js/swiper.min'
import SwipeableViews from 'react-swipeable-views';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { withStyles } from '@material-ui/core/styles';
import ProductList from '../../components/productList/productList';
import {connect} from 'react-redux'
import 'swiper/css/swiper.min.css'
import actionCreator from "../../store/actionCreator";

const StyledTabs = withStyles({
	indicator: {
		display: 'flex',
		justifyContent: 'center',
		backgroundColor: 'transparent',
		height: '3px',
		'& > div': {
			maxWidth: 40,
			width: '100%',
			backgroundColor: '#f8c10e',
			borderRadius: '4px'
		},
	},
})(props => <Tabs {...props} TabIndicatorProps={{ children: <div /> }} />);

class HomeStore extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			swiper: null,
			swipeIndex: 0,
			productListData:[],
			classifyList:[
				{title:'宠物用品', img:box},
				{title:'宠物食品', img:bowl},
				{title:'宠物问答', img:question},
				{title:'宠物美容', img:pet},
				{title:'宠物医院', img:hospital},
				{title:'宠物寄养', img:heart},
			],
		}
	}


	UNSAFE_componentWillMount() {
		this.props.changeNavStates();

	}

	componentDidMount() {
		this.initSwiper();
		this.getData();
	}


	render() {
		let data = this.state;
		return (
				<div style={{overflow:'hidden'}}>
					<h1 style={{textAlign:'left', paddingLeft:'10px'}}>小店</h1>
					<div className={style.classification}>
						{data.classifyList.map((item,key) => {
							return (
									<div className={style.classifyItem} key={key}>
										<img src={item.img} alt={item.title}/>
										<p>{item.title}</p>
									</div>
							)
						})}
					</div>
					<TitleBar title="热门商品" />
					<div className={style.hotCommodity}>
						<div className="swiper-container hotCommodity">
							<div className="swiper-wrapper">
								<div className="swiper-slide">
									<div className={style.hotCommodityItem}>
										<img src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3266487938,1947964626&fm=26&gp=0.jpg" alt=""/>
										<div className={style.hotCommodityInfo}>
											<p className={style.title}>Get精品狗粮</p>
											<p className={style.describe}>精选德国狗粮,买一送一</p>
											<p className={style.price}><span>￥</span>99.9</p>
											<span className={style.buyBtn}>购买</span>
										</div>
									</div>
								</div>
								{/*<div className="swiper-slide">asdasd</div>*/}
							</div>
						</div>
					</div>
						<div className={style.tabHeader}>
							<StyledTabs value={data.swipeIndex} onChange={this.handleTabChange}>
								<Tab disableFocusRipple={true} disableRipple={true} label="宠粮" />
								<Tab disableFocusRipple={true} disableRipple={true} label="玩具" />
								<Tab disableFocusRipple={true} disableRipple={true} label="衣服" />
							</StyledTabs>
						</div>
					<SwipeableViews animateHeight index={data.swipeIndex} onChangeIndex={this.handleSwipeChange}>
						<div><ProductList history={this.props.history} data={data.productListData}/></div>
						<div><ProductList history={this.props.history} data={data.productListData}/></div>
						<div><ProductList history={this.props.history} data={data.productListData}/></div>
					</SwipeableViews>
				</div>
		)
	}

	//初始化swiper
	initSwiper = () => {
		this.setState({
			swiper: new Swiper('.hotCommodity', {
				speed:500,
				autoplay: {
					delay:3000,
					disableOnInteraction:false,
				}
			})
		})
	};

	//点击tab选项时
	handleTabChange = (event, value) => {
		this.setState({
			swipeIndex: value
		})
	};

	//滑动tab时
	handleSwipeChange = index => {
		this.setState({
			swipeIndex: index
		})
	};

	//获取数据
	getData = () => {
		React.axiosPost('/api/getProductList')
				.then(response => {
					this.setState({
						productListData:response.data
					})
				})
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

export default connect(mapStateToProps,mapDispatchToProps)(HomeStore);