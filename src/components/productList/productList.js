import React from 'react';
import style from './productList.module.scss';

const productList = (props) => {
	return (
			<div className={style.productList}>
				<div className={style.productItem}>
					<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3329936885,2973528673&fm=26&gp=0.jpg" alt=""/>
					<p className={style.title}>幼犬跳跳球玩具</p>
					<p className={style.price}><span>￥</span>339</p>
				</div>
				<div className={style.productItem}>
					<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3329936885,2973528673&fm=26&gp=0.jpg" alt=""/>
					<p className={style.title}>幼犬跳跳球玩具</p>
					<p className={style.price}><span>￥</span>339</p>
				</div>
				<div className={style.productItem}>
					<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3329936885,2973528673&fm=26&gp=0.jpg" alt=""/>
					<p className={style.title}>幼犬跳跳球玩具</p>
					<p className={style.price}><span>￥</span>339</p>
				</div>
				<div className={style.productItem}>
					<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3329936885,2973528673&fm=26&gp=0.jpg" alt=""/>
					<p className={style.title}>幼犬跳跳球玩具</p>
					<p className={style.price}><span>￥</span>339</p>
				</div>
				<div className={style.productItem}>
					<img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3329936885,2973528673&fm=26&gp=0.jpg" alt=""/>
					<p className={style.title}>幼犬跳跳球玩具</p>
					<p className={style.price}><span>￥</span>339</p>
				</div>
			</div>
	)
};

export default productList;