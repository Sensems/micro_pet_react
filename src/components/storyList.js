import React, {Component} from 'react'
import Swiper from 'swiper/js/swiper.min'
// import 'swiper/css/swiper.min.css'
import Chat from '@material-ui/icons/Chat';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

class StoryList extends Component{
	constructor(props) {
		super(props);
		this.state = {
			storyList:[]
		}
	}

	componentDidMount() {
		new Swiper('.swiper-container1', {
			spaceBetween : 20,
			speed:500,
			slidesPerView: 'auto',
		});
	}

	render() {
		return (
				<div className="storyList">
					<div className="swiper-container1">
						<div className="swiper-wrapper">
							<div className="swiper-slide">
								<div className="storyItem">
									<img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3442060684,767791650&fm=26&gp=0.jpg' alt=""/>
									<p className="storyTitle">我家甜甜的'私密'故事!</p>
									<div className="tip">
										<span><Chat style={{fontSize:20}}/>23.5k</span>
										<span><FavoriteBorder style={{fontSize:20}} />22.2k</span>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="storyItem">
									<img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3442060684,767791650&fm=26&gp=0.jpg' alt=""/>
									<p className="storyTitle">我家甜甜的'私密'故事!</p>
									<div className="tip">
										<span><Chat style={{fontSize:20}}/>23.5k</span>
										<span><FavoriteBorder style={{fontSize:20}} />22.2k</span>
									</div>
								</div>
							</div>
							<div className="swiper-slide">
								<div className="storyItem">
									<img src='https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3442060684,767791650&fm=26&gp=0.jpg' alt=""/>
									<p className="storyTitle">我家甜甜的'私密'故事!</p>
									<div className="tip">
										<span><Chat style={{fontSize:20}}/>23.5k</span>
										<span><FavoriteBorder style={{fontSize:20}} />22.2k</span>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
		)
	}
}

export default StoryList;