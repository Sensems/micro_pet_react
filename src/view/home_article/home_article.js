import React, {Component} from 'react'
import {connect} from 'react-redux'
import actionCreator from '../../store/actionCreator'
import Swiper from 'swiper/js/swiper.min'
// import 'swiper/css/swiper.min.css'
import './home_article.scss'
import DynamicState from './dynamic_state'

class HomeArticle extends Component {
	constructor(props) {
		super(props);
		this.state = {
			galleryTop:null,
			galleryThumbs:null,
		}
	}

	UNSAFE_componentWillMount () {
		this.props.changeNavStates();
	}

	componentDidMount() {
		this.initSwiper();
	}

	render() {
		return (
				<div>
					<div className="swiper-container title-thumbs">
						<div className="swiper-wrapper">
							<div className="swiper-slide">动态</div>
							{/*<div className="swiper-slide">专题</div>*/}
						</div>
					</div>
					<div className="swiper-container content">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<DynamicState />
							</div>
							<div className="swiper-slide">asdasd</div>
						</div>
					</div>
				</div>
		)
	}

	initSwiper = () => {
		this.setState({
			galleryThumbs: new Swiper('.title-thumbs', {
				spaceBetween: 10,
				freeMode: false,
				allowSlideNext : false,
				allowSlidePrev : false,
				watchSlidesVisibility: true,
				watchSlidesProgress: true,
			}),
		}, () => {
			this.setState({
				galleryTop: new Swiper('.content', {
					spaceBetween: 10,
					allowTouchMove: false,
					thumbs: {
						swiper: this.state.galleryThumbs
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
		changeNavStates: () => dispatch(actionCreator.changeNavState('article'))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeArticle);