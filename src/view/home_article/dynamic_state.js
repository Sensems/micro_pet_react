import React, {Component} from 'react';
import TitleBar from '../../components/titleBar'
import SearchBar from '../../components/searchBar'
import Swiper from 'swiper/js/swiper.min'
import Add from '@material-ui/icons/Add';
import DynamicItem from '../../components/dynamicItem'

class DynamicState extends Component{
	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
		new Swiper('.petPlusList', {
			spaceBetween : 20,
			speed:500,
			slidesPerView: 'auto',
		});
	}

	render() {
		let petPlusItems = (
				<div className="swiper-slide">
					<div className="petPlusItem">
						<img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3442060684,767791650&fm=26&gp=0.jpg' alt=""/>
						<p className="petPlusTitle">依然范特西</p>
						<p className="tip">社区活跃用户</p>
						<span>
							<Add />
						</span>
					</div>
				</div>
		);

		return (
				<div>
					<SearchBar />
					<TitleBar title="宠物达人" secondTitle="查看更多" />
					<div className="petPlusList">
						<div className="swiper-wrapper">
							{petPlusItems}
						</div>
					</div>
					<TitleBar title="宠物友动态"/>
					<div className="dynamicList">
						<DynamicItem />
					</div>

				</div>
		)
	}
}

export default DynamicState;