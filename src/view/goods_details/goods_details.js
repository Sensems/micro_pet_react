import React from 'react';
import style from './goods_details.module.scss'
import SwipeableViews from 'react-swipeable-views';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { autoPlay } from 'react-swipeable-views-utils';
import GoodsDetailOptionBar from '../../components/goodsDetailOptionBar'
import HeadsetMicIcon from '@material-ui/icons/HeadsetMic';
import StorefrontIcon from '@material-ui/icons/Storefront';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class GoodsDetails extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			SwipeIndex: 0,
			goodsDetail:{
				img_url_list:[]
			},
			arr: [1,2,3]
		}
	}

	componentDidMount() {
		this.getData();
	}

	render() {
		let state = this.state;
		return (
				<div className={style.goodsDetailsWrap}>
					<header>

					</header>
					<div className={style.goodsCarousel}>
						<AutoPlaySwipeableViews index={state.SwipeIndex} onChangeIndex={this.handleChangeIndex}>
							{state.goodsDetail.img_url_list.map((item,index) => {
								return 	(
										<div className={style.slide} key={index}>
											<img src={item} alt=""/>
										</div>
								)
							})}
						</AutoPlaySwipeableViews>
					</div>
					<div className={`${style.baseInfo} ${style.baseStyle}`}>
						<div className={style.price}><i>￥</i>{state.goodsDetail.price} <span className={style.markPrice}>9999</span> </div>
						<div className={style.title}>{state.goodsDetail.title}</div>
						<div className={style.describe}>{state.goodsDetail.describe}</div>
						{state.goodsDetail.tip && <a href={state.goodsDetail.tip.url}><span className={style.tip}>{state.goodsDetail.tip.value}</span></a>}
						<div className={style.favorite}>
							{state.goodsDetail.favorite?<FavoriteIcon style={{color:'red'}}/>:<FavoriteBorderIcon />}
						</div>
					</div>
					<GoodsDetailOptionBar className={style.baseStyle} title="领券">
						<div className={style.discountCouponList}>
							<span className={style.discountItem}>99元</span>
							<span className={style.discountItem}>120元</span>
						</div>
					</GoodsDetailOptionBar>
					<GoodsDetailOptionBar style={{borderBottom:'1px solid #e8e8e8'}} title="已选">
						<div>
							<FavoriteIcon style={{color:'red'}}/>
							<span>就是这样</span>
						</div>
					</GoodsDetailOptionBar>
					<GoodsDetailOptionBar className={style.baseStyle} title="服务">

					</GoodsDetailOptionBar>
					<GoodsDetailOptionBar className={style.baseStyle} title="评论">
							<span style={{float:'right',fontWeight:'bold'}}>好评 99%</span>
					</GoodsDetailOptionBar>
					<div className={style.goodsDetailFooter}>
						<div className={style.FooterLeft}>
							<div className={style.leftItem}>
								<HeadsetMicIcon />
								<p>客服</p>
							</div>
							<div className={style.leftItem}>
								<StorefrontIcon />
								<p>店铺</p>
							</div>
							<div className={style.leftItem}>
								<LocalGroceryStoreIcon />
								<p>购物车</p>
							</div>
						</div>
						<div className={style.FooterRight}>
							<div className={style.buy}>
								<span>加入购物车</span>
								<span>立即购买</span>
							</div>
						</div>
					</div>
				</div>
		)
	}

	handleChangeIndex = (index) => {
		this.setState({
			SwipeIndex: index
		})
	};

	//获取数据
	getData = () => {
		React.axiosPost('/api/getGoodDetail').then(response => {
			console.log(response);
			this.setState({
				goodsDetail:response.data[0]
			},() => {
			})
		})
	};
}

export default GoodsDetails;