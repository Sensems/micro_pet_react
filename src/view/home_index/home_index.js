import React, {Component} from 'react'
import actionCreator from "../../store/actionCreator";
import {connect} from "react-redux";
import Swiper from 'swiper/js/swiper.min'
import SearchBar from '../../components/searchBar'
import TitleBar from '../../components/titleBar'
import menu_article from '../../asset/images/article.png'
import menu_citizendium from '../../asset/images/citizendium.png'
import menu_equip from '../../asset/images/equip.png'
import menu_pairing from '../../asset/images/pairing.png'
import 'swiper/css/swiper.min.css'
import './home_index.scss'

class HomeIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			swiper: {},
			carouselList: [],
			menuList: [
				{title: '宠物装备', img:menu_equip},
				{title: '我的宠物', img:menu_citizendium},
				{title: '宠物百科', img:menu_article},
				{title: '宠物配对', img:menu_pairing},
			]
		}

	}

	componentDidMount() {
		this.getCarousel();
	}

	componentWillUnmount() {
		this.state.swiper.destroy()
	}

	render() {
		let data = this.state;
		let swiperSlides = data.carouselList.map((item) => {
			return (
					<div className="swiper-slide" key={item.id}>
						<img src={item.img_url} alt={item.title}/>
					</div>
			)
		});

		let memuItems = data.menuList.map((item,key) => {
			return (
					<div className="menuItem" key={key}>
						<img src={item.img} alt=""/>
						<p>{item.title}</p>
					</div>
			)
		});

		return (
				<div style={{overflow: 'hidden'}}>
					<h2 style={{textAlign:'left', paddingLeft:'10px'}}>首页</h2>
					<SearchBar />
					<div className="swiper-container">
						<div className="swiper-wrapper">
							{swiperSlides}
						</div>
					</div>
					<div className="menuBox">
						{memuItems}
					</div>
					<TitleBar title="精选文章" secondTitle="查看更多"/>
				</div>
		)
	}

	//初始化Swiper
	initSwiper = () => {
		this.setState((pevState) => {
			pevState = new Swiper('.swiper-container', {
				speed:1000,
				slidesPerView: 'auto',
				centeredSlides: true,
				autoplay: {
					delay:3000,
					disableOnInteraction:false,
				},
				effect : 'coverflow',
				coverflowEffect: {
					rotate: 25,
					stretch: 10,
					depth: 50,
					modifier: 2,
					slideShadows : true
				},
			});
			return {
				swiper: pevState
			}
		})
	};

	//获取轮播图
	getCarousel = () => {
		React.axiosPost('/index/getAllCarousel')
				.then(result => {
					if(result.data.length>0 && result.data) {
						this.setState({
							carouselList: result.data
						}, () => {
							this.initSwiper();
						})
					}
				});
	};


}

function mapDispatchToProps(dispatch) {
	return {
		changeNavStates: () => dispatch(actionCreator.changeNavState('index'))
	}
}

export default connect(mapDispatchToProps)(HomeIndex);