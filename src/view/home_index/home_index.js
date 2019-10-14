import React, {Component} from 'react'
import actionCreator from "../../store/actionCreator";
import {connect} from "react-redux";
import Swiper from 'swiper/js/swiper.min'
import 'swiper/css/swiper.min.css'
import './home_index.scss'

class HomeIndex extends Component {
	constructor(props) {
		super(props);
		this.state = {
			swiper:{},
			carouselList:[],
		}
	}

	componentDidMount() {
		this.initSwiper();
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
						<img src={'localhost:3030' + item.img_url} alt={item.title}/>
					</div>
			)
		});
		return (
				<div>
					<div className="swiper-container">
						<div className="swiper-wrapper">
							{swiperSlides}
						</div>

						<div className="swiper-pagination"></div>

						<div className="swiper-button-prev"></div>
						<div className="swiper-button-next"></div>
					</div>
				</div>
		)
	}

	//初始化Swiper
	initSwiper = () => {
		this.setState((pevState) => {
			pevState = new Swiper('.swiper-container', {
				loop: true,
				autoplay: true,
				pagination: {
					el: '.swiper-pagination',
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
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